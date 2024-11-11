import type { IndexedSchemas } from 'src/utils/indexedDb/type/IndexedSchema';
import type { ArrayElementType } from 'src/utils/type/ArrayElementType';

export type ClearActions<State> = {
    [Action in keyof IndexedSchemas<State> as State[Action] extends Array<any> ? `remove${Capitalize<string & Action>}` : never]: (key: string) => Promise<void>;
};

export type AddActions<State> = {
    [Action in keyof IndexedSchemas<State> as State[Action] extends Array<any> ? `add${Capitalize<string & Action>}` : never]: (value: ArrayElementType<State[Action]>) => Promise<void>;
};

export type UpdateActions<State> = {
    [Action in keyof IndexedSchemas<State> as `update${Capitalize<string & Action>}`]: <T>(value: T) => Promise<void>;
};

export type GetActions<State> = {
    [Action in keyof IndexedSchemas<State> as `get${Capitalize<string & Action>}`]: <T>() => Promise<T>;
};
