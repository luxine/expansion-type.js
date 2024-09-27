import { AbstractQueue } from "../AbstractClass/AbstractQueue";

export class Queue<T> extends AbstractQueue<T> {
    constructor() {
        super();
    }

    enqueue(element: T): void {
        let _wkm = this.wkm.get(this) as Array<T>;
        _wkm.push(element);
    }

    dequeue(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        let _wkm = this.wkm.get(this) as Array<T>;
        return _wkm.shift();
    }
}
