import { IStack } from "../AbstractInterface/IStack";

export abstract class AbstractStack<T> implements IStack<T> {
    protected wkm: WeakMap<object, T[]>;
    constructor() {
        this.wkm = new WeakMap();
        this.wkm.set(this, []);
    }

    abstract push(element: T): void;

    abstract pop(): void;

    isEmpty(): boolean {
        let _wkm = this.wkm.get(this) as Array<T>;
        return _wkm.length === 0;
    }

    peek(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        let _wkm = this.wkm.get(this) as Array<T>;
        return _wkm[_wkm.length - 1];
    }

    size(): number {
        let _wkm = this.wkm.get(this) as Array<T>;
        return _wkm.length;
    }

    print(): T[] | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        let _wkm = this.wkm.get(this) as Array<T>;
        return [..._wkm].reverse();
    }

    clear(): void {
        this.wkm.set(this, []);
    }
}

