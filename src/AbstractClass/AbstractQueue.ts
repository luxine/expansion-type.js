import { IQueue } from "../AbstractInterface/IQueue";
export abstract class AbstractQueue<T> implements IQueue<T> {
    protected wkm: WeakMap<object, T[]>;

    constructor() {
        this.wkm = new WeakMap();
        this.wkm.set(this, []);
    }

    abstract enqueue(element: T): void;

    abstract dequeue(): T | undefined;

    size(): number {
        let _wkm = this.wkm.get(this) as Array<T>;
        return _wkm.length;
    }

    isEmpty(): boolean {
        let _wkm = this.wkm.get(this) as Array<T>;
        return _wkm.length === 0;
    }

    peek(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        let _wkm = this.wkm.get(this) as Array<T>;
        return _wkm[0];
    }

    clear(): void {
        this.wkm.set(this, []);
    }

    print(): T[] {
        if (this.isEmpty()) {
            return [];
        }
        let _wkm = this.wkm.get(this) as Array<T>;
        return _wkm;
    }
}
