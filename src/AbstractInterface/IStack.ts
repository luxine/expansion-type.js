export interface IStack<T> {
    push(element: T): void;
    pop(): void;
    isEmpty(): boolean;
    peek(): T | undefined;
    size(): number;
    print(): T[] | undefined;
    clear(): void;
}
