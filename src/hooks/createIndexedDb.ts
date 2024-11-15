import { type Params, type Result } from 'src/types/hooks/CreateIndexedDb';
import { createDb } from 'src/utils/indexedDb/createDb';
import { generateIndexedDbActions } from 'src/utils/indexedDb/generateIndexedDbActions';
import { populateInitialStateInIndexedDb } from 'src/utils/indexedDb/populateInitialStateInIndexedDb';
import { IndexedSchema } from 'src/utils/indexedDb/type/IndexedSchema';
import { removeNulls } from 'src/utils/object/removeNulls';
import { upperCaseFirstLetter } from 'src/utils/string/upperCaseFirstLetter';

export function createIndexedDb<State>({ name, version, schema, initialState }: Params<State>): Result<State> {
    let indexedDbActions: any = {};

    initializeDb();

    async function initializeDb() {
        const indexedDB = window.indexedDB;
        if (!indexedDB) return;

        const db = await createDb(`pidedirecto-store-${name}`, version, schema);
        await populateInitialStateInIndexedDb(db, initialState as any, schema);
        indexedDbActions = await generateIndexedDbActions<State>(db, schema, {
            actions: ['update', 'remove', 'add', 'get'],
        });
    }

    function createActions(schema: Record<string, IndexedSchema>) {
        let actions: any = {};
        for (const [objectStoreName, objectStoreSchema] of Object.entries(schema)) {
            const updateActionKey = `update${upperCaseFirstLetter(objectStoreName)}`;
            const getActionKey = `get${upperCaseFirstLetter(objectStoreName)}`;

            if (objectStoreSchema.type === 'array') {
                const removeActionKey = `remove${upperCaseFirstLetter(objectStoreName)}`;
                const addActionKey = `add${upperCaseFirstLetter(objectStoreName)}`;
                actions = removeNulls({
                    ...actions,
                    [removeActionKey]: async (...args: any[]) => {
                        await indexedDbActions[removeActionKey]?.(...args);
                    },
                    [updateActionKey]: async (...args: any[]) => {
                        await indexedDbActions[updateActionKey]?.(...args);
                    },
                    [getActionKey]: async () => {
                        return indexedDbActions[getActionKey]?.();
                    },
                    [addActionKey]: async (...args: any[]) => {
                        await indexedDbActions[addActionKey]?.(...args);
                    },
                });
                continue;
            }
            actions = removeNulls({
                ...actions,
                [updateActionKey]: async (...args: any[]) => {
                    await indexedDbActions[updateActionKey]?.(...args);
                },
                [getActionKey]: async () => {
                    return indexedDbActions[getActionKey]?.();
                },
            });
        }
        return actions;
    }

    return createActions(schema);
}
