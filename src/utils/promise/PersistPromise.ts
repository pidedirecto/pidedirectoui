import { wait } from 'src/utils/wait';

export class PersistPromise {
    private cancelled = false;
    public readonly promise: Promise<void>;

    constructor(asyncFunction: () => Promise<void> = () => Promise.resolve()) {
        this.promise = (async () => {
            await wait(0); // needed to wait for cancelled to be set, without this updateValueFromObjectStore will be called every time an action is used
            if (this.cancelled) return;
            await asyncFunction();
        })();
    }

    cancel(): void {
        this.cancelled = true;
    }
}
