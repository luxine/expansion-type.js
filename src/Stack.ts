export class Stack<T> {
    private count: number;
    private wkm: WeakMap<object, T>;
    private keyMap: Map<number, object>;

    constructor() {
        this.keyMap = new Map();
        this.wkm = new WeakMap();
        this.count = 0;
    }
    
    /**
     * Adds an element to the stack.
     * @param element - The element to add to the stack.
     */
    push(element: T): void {
        this.count++;
        const key = {};
        this.keyMap.set(this.count, key);
        this.wkm.set(key, element);
    }

    /**
     * Removes the top element from the stack.
     */
    pop(): void {
        if (this.isEmpty()) {
            return;
        }
        this.wkm.delete(this.keyMap.get(this.count)!);
        this.keyMap.delete(this.count);
        this.count--;
    }

    /**
     * Checks if the stack is empty.
     * @returns True if the stack is empty, otherwise false.
     */
    isEmpty(): boolean {
        return this.count === 0;
    }

    /**
     * Returns the top element of the stack without removing it.
     * @returns The top element of the stack, or undefined if the stack is empty.
     */
    peek(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.wkm.get(this.keyMap.get(this.count)!);
    }

    /**
     * Returns the number of elements in the stack.
     * @returns The number of elements in the stack.
     */
    size(): number {
        return this.count;
    }

    /**
     * Returns an array of all elements in the stack.
     * @returns An array of all elements in the stack, or undefined if the stack is empty.
     */
    print(): T[] | undefined {
        if (this.isEmpty()) {
            return undefined;
        }

        const list: T[] = [];
        for (let i = this.count; i > 0; i--) {
            const item = this.wkm.get(this.keyMap.get(i)!);
            if (item !== undefined) {
                list.push(item);
            }
        }
        return list;
    }

    /**
     * Clears all elements from the stack.
     */
    clear(): void {
        this.wkm = new WeakMap();
        this.keyMap.clear();
        this.count = 0;
    }
}
