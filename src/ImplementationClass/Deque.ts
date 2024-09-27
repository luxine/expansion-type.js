import { AbstractDeque } from "../AbstractClass/AbstractDeque";
export class Deque<T> extends AbstractDeque<T> {
    constructor() {
        super();
    }

    addFront(element: T): void {
        let _wkm = this.wkm.get(this) as Array<T>;
        _wkm.unshift(element);
    }

    removeBack(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        let _wkm = this.wkm.get(this) as Array<T>;
        return _wkm.pop();
    }

    peekBack(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        let _wkm = this.wkm.get(this) as Array<T>;
        return _wkm[_wkm.length - 1];
    }
}
