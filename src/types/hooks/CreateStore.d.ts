

export type Params<State, Actions> = {
    initialState: State;
    actions: {
        [Action in keyof Actions]: Actions[Action] extends (...args: any) => any ? (state: State, ...args: Parameters<Actions[Action]>) => void : (state: State) => void;
    };
};

export type Result<State, Actions> = [UseStore<State>, UseAction<Actions>];

type UseStore<State> = <T>(fn: (state: State) => T) => T;

type UseAction<Actions> = <T extends (...args: Array<any>) => void>(fn: (actions: Actions) => T) => T;
