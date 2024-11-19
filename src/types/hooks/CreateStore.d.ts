export type Params<State extends Record<string, any>, Actions> = {
    initialState: State;
    actions: {
        [Action in keyof Actions]: Actions[Action] extends (...args: any) => any ? (state: State, ...args: Parameters<Actions[Action]>) => void : (state: State) => void;
    };
} & ({ persist?: false } | { persist: true; storeName: string });

export type Result<State, Actions> = [UseStore<State>, UseAction<Actions>];

type UseStore<State> = <T>(fn: (state: State) => T) => T;

type UseAction<Actions> = <T extends (...args: Array<any>) => void>(fn: (actions: Actions) => T) => T;
