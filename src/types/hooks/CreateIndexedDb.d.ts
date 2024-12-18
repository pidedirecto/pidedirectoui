import type { AddActions, GetActions, RemoveActions, UpdateActions } from 'src/utils/indexedDb/type/IndexedDbActions';

export type Params<State> = {
    name: string;
    initialState: State;
};

export type Result<State> = Actions<State>;

export type Actions<State> = UpdateActions<State> & GetActions<State> & AddActions<State> & RemoveActions<State>;
