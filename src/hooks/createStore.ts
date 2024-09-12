import { produce } from 'immer';
import { useSyncExternalStore } from 'use-sync-external-store/shim';
import type { Params, Result } from 'src/types/hooks/CreateStore';
import { cloneObject } from 'src/utils/object/cloneObject';
import { isObject } from 'src/utils/object/isObject';

export function createStore<State, Actions>({ initialState, actions }: Params<State, Actions>): Result<State, Actions> {
    if (!isObject(initialState)) {
        console.error('initialState passed to createStore function is not an object');
    }

    let state: State = cloneObject(initialState as any);
    let listeners: Array<Listener> = [];

    function useStore<T>(fn: (state: State) => T): T {
        return useSyncExternalStore<T>(subscribeToStore, getSnapshotStore(fn));
    }

    function useAction<T extends (...args: Array<any>) => void>(fn: (actions: Actions) => T): T {
        const action = fn(actions as any);

        return ((...args: Array<any>) => {
            state = produce(state, (draft) => action(draft as any, ...args));
            notifyChanges();
        }) as T;
    }

    function subscribeToStore(listener: Listener) {
        listeners.push(listener);

        return () => {
            listeners = listeners.filter((currentListener) => currentListener !== listener);
        };
    }

    function getSnapshotStore<T>(fn: (state: State) => T) {
        return () => fn(state);
    }

    function notifyChanges() {
        listeners.forEach((listener) => listener());
    }

    return [useStore, useAction];
}

type Listener = () => void;
