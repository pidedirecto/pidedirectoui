export type Params<State> = {
    name: string;
    version: number;
    schema: Schemas<State>;
    initialState: State;
};

type Schemas<State> = {
    [ObjectStore in keyof State]: Schema | ArraySchema;
};

export type Schema = {
    type: 'primitive' | 'object';
};

type ArraySchema = {
    type: 'array';
    key: string;
};

export type Result<State> = [UseStore<State>, UseAction<State>];

type UseStore<State> = <T>(fn: (state: State) => T) => T;

type UseAction<State> = <T>(fn: (actions: Actions<State>) => T) => T;

export type Actions<State> = ClearActions<State> & AddActions<State> & UpdateActions<State>;

type ClearActions<State> = {
    [Action in keyof Schemas<State> as State[Action] extends Array<any> ? `remove${Capitalize<string & Action>}` : never]: (key: string) => Promise<void>;
};

type AddActions<State> = {
    [Action in keyof Schemas<State> as State[Action] extends Array<any> ? `add${Capitalize<string & Action>}` : never]: (value: ElementType<State[Action]>) => Promise<void>;
};

type UpdateActions<State> = {
    [Action in keyof Schemas<State> as `update${Capitalize<string & Action>}`]: <T>(value: T) => Promise<void>;
};

type ElementType<T> = T extends Array<infer U> ? U : T;
