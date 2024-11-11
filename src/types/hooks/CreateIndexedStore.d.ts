import type { AddActions, ClearActions, UpdateActions } from 'src/utils/indexedDb/type/IndexedDbActions';
import type { IndexedSchemas } from 'src/utils/indexedDb/type/IndexedSchema';

export type Params<State> = {
    name: string;
    version: number;
    schema: IndexedSchemas<State>;
    initialState: State;
};

export type Result<State> = [UseStore<State>, UseAction<State>];

type UseStore<State> = <T>(fn: (state: State) => T) => T;

type UseAction<State> = <T>(fn: (actions: Actions<State>) => T) => T;

export type Actions<State> = ClearActions<State> & AddActions<State> & UpdateActions<State>;
