import type { AddActions, ClearActions, GetActions, UpdateActions } from 'src/utils/indexedDb/type/IndexedDbActions';

export type Params<State> = {
    name: string;
    version: number;
    schema: Schemas<State>;
    initialState: State;
};

export type Result<State> = Actions<State>;

export type Actions<State> = ClearActions<State> & AddActions<State> & UpdateActions<State> & GetActions<State>;
