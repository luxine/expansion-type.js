import { IQueue } from "./IQueue";

export interface IDeque<T> extends IQueue<T> {
    addFront(element: T): void;
    addBack(element: T): void;
    removeFront(): T | undefined;
    removeBack(): T | undefined;
    peekFront(): T | undefined;
    peekBack(): T | undefined;
}
