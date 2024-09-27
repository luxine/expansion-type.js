import { AbstractQueue } from "./AbstractQueue";
import { IDeque } from "../AbstractInterface/IDeque";

export abstract class AbstractDeque<T> extends AbstractQueue<T> implements IDeque<T> {
    constructor() {
        super();
    }

    abstract addFront(element: T): void;

    addBack(element: T): void {
        this.enqueue(element);
    }

    removeFront(): T | undefined {
        return this.dequeue();
    }

    abstract removeBack(): T | undefined;

    peekFront(): T | undefined {
        return this.peek();
    }

    abstract peekBack(): T | undefined;

    enqueue(element: T): void {
        throw new Error("This method is disabled, please use addBack() instead.");
    }

    dequeue(): T | undefined {
        throw new Error("This method is disabled, please use removeFront() instead.");
    }

    peek(): T | undefined {
        throw new Error("This method is disabled, please use peekFront() / peekBack() instead.");
    }
}
