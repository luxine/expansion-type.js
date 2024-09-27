export interface IQueue<T> {
    enqueue(element: T): void;
    dequeue(): T | undefined;
    size(): number;
    isEmpty(): boolean;
    peek(): T | undefined;
    clear(): void;
    print(): T[];
}
