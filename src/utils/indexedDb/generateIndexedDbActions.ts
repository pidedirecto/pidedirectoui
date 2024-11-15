import type { Actions } from 'src/types/hooks/CreateIndexedDb';
import { addValueToObjectStore } from 'src/utils/indexedDb/addValueToObjectStore';
import { getAllObjectStoreValues } from 'src/utils/indexedDb/getAllObjectStoreValues';
import { getObjectStoreValue } from 'src/utils/indexedDb/getObjectStoreValue';
import { removeValueFromObjectStore } from 'src/utils/indexedDb/removeValueFromObjectStore';
import { IndexedSchema } from 'src/utils/indexedDb/type/IndexedSchema';
import { updateValueFromObjectStore } from 'src/utils/indexedDb/updateValueFromObjectStore';
import { removeNulls } from 'src/utils/object/removeNulls';
import { upperCaseFirstLetter } from 'src/utils/string/upperCaseFirstLetter';

export async function generateIndexedDbActions<State>(db: IDBDatabase, schema: Record<string, IndexedSchema>, options: Options): Promise<Actions<State>> {
    return new Promise((resolve, reject) => {
        try {
            let actions: any = {};
            for (const [objectStoreName, objectStoreSchema] of Object.entries(schema)) {
                if (objectStoreSchema.type === 'array') {
                    let updateAction = undefined;
                    let getAction = undefined;
                    let removeAction = undefined;
                    let addAction = undefined;
                    if (options.actions.includes('update')) {
                        updateAction = getUpdateElementFromArrayAction(db, objectStoreName, options?.onSuccess);
                    }
                    if (options.actions.includes('get')) {
                        getAction = async () => {
                            return getAllObjectStoreValues(db, objectStoreName);
                        };
                    }
                    if (options.actions.includes('remove')) {
                        removeAction = getRemoveElementFromArrayAction(db, objectStoreName, options?.onSuccess);
                    }
                    if (options.actions.includes('add')) {
                        addAction = getAddElementToArrayAction(db, objectStoreName, options?.onSuccess);
                    }
                    actions = removeNulls({
                        ...actions,
                        [`remove${upperCaseFirstLetter(objectStoreName)}`]: removeAction,
                        [`update${upperCaseFirstLetter(objectStoreName)}`]: updateAction,
                        [`get${upperCaseFirstLetter(objectStoreName)}`]: getAction,
                        [`add${upperCaseFirstLetter(objectStoreName)}`]: addAction,
                    });
                    continue;
                }
                let updateAction = undefined;
                let getAction = undefined;
                if (options.actions.includes('update')) {
                    updateAction = getUpdateAction(db, objectStoreName, options?.onSuccess);
                }
                if (options.actions.includes('get')) {
                    getAction = async () => {
                        return getObjectStoreValue(db, objectStoreName, 1);
                    };
                }

                actions = removeNulls({
                    ...actions,
                    [`update${upperCaseFirstLetter(objectStoreName)}`]: updateAction,
                    [`get${upperCaseFirstLetter(objectStoreName)}`]: getAction,
                });
            }
            resolve(actions);
        } catch (e) {
            reject(e);
        }
    });
}

function getRemoveElementFromArrayAction(db: IDBDatabase, objectStoreName: string, onSuccess?: Function): (key: string) => Promise<void> {
    return async (key: string) => {
        await removeValueFromObjectStore(db, objectStoreName, key);
        onSuccess?.();
    };
}

function getUpdateElementFromArrayAction(db: IDBDatabase, objectStoreName: string, onSuccess?: Function): <T>(key: string, value: T) => void {
    return async <T>(value: T) => {
        await updateValueFromObjectStore(db, objectStoreName, value);
        onSuccess?.();
    };
}

function getUpdateAction(db: IDBDatabase, objectStoreName: string, onSuccess?: Function): <T>(value: T) => void {
    return async <T>(value: T) => {
        await updateValueFromObjectStore(db, objectStoreName, value, 1);
        onSuccess?.();
    };
}

function getAddElementToArrayAction(db: IDBDatabase, objectStoreName: string, onSuccess?: Function): <T>(value: T) => void {
    return async <T>(value: T) => {
        await addValueToObjectStore(db, objectStoreName, value);
        onSuccess?.();
    };
}

type Options = {
    actions: Array<'update' | 'remove' | 'get' | 'add'>;
    onSuccess?: Function;
};
