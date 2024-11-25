import type { IndexedSchemas } from 'src/utils/indexedDb/type/IndexedSchema';
import type { ArrayElementType } from 'src/utils/type/ArrayElementType';

export type RemoveActions<State> = {
    [Action in keyof IndexedSchemas<State> as State[Action] extends Array<any> ? `remove${Capitalize<string & Action>}` : never]: (value: ArrayElementType<State[Action]>, key?: string) => void;
};

export type AddActions<State> = {
    [Action in keyof IndexedSchemas<State> as State[Action] extends Array<any> ? `add${Capitalize<string & Action>}` : never]: (value: ArrayElementType<State[Action]>) => void;
};

export type UpdateActions<State> = {
    [Action in keyof IndexedSchemas<State> as `update${Capitalize<string & Action>}`]: (value: State[Action]) => void;
};

export type GetActions<State> = {
    [Action in keyof IndexedSchemas<State> as `get${Capitalize<string & Action>}`]: () => State[Action];
};
