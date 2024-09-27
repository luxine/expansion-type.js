import { AbstractStack } from "../AbstractClass/AbstractStack";

export class Stack<T> extends AbstractStack<T> {
    constructor() {
        super();
    }

    push(element: T): void {
        let _wkm = this.wkm.get(this) as Array<T>;
        _wkm.push(element);
    }

    pop(): void {
        if (this.isEmpty()) {
            return;
        }
        let _wkm = this.wkm.get(this) as Array<T>;
        _wkm.pop();
    }
}

