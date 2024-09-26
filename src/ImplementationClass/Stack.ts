export class Stack<T> {
    private wkm: WeakMap<object, T>;
    constructor() {
        this.wkm = new WeakMap();
        this.wkm.set(this,[] as T)
    }
    
    /**
     * Adds an element to the stack.
     * @param element - The element to add to the stack.
     */
    push(element: T): void {
        let _wkm = this.wkm.get(this) as Array<T>;
        _wkm.push(element);
    }

    /**
     * Removes the top element from the stack.
     */
    pop(): void {
        if (this.isEmpty()) {
            return;
        }
        let _wkm = this.wkm.get(this) as Array<T>;
        _wkm.pop();
    }

    /**
     * Checks if the stack is empty.
     * @returns True if the stack is empty, otherwise false.
     */
    isEmpty(): boolean {
        let _wkm = this.wkm.get(this) as Array<T>;
        return _wkm.length === 0;
    }

    /**
     * Returns the top element of the stack without removing it.
     * @returns The top element of the stack, or undefined if the stack is empty.
     */
    peek(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        let _wkm = this.wkm.get(this) as Array<T>;
        return _wkm[length - 1];
    }

    /**
     * Returns the number of elements in the stack.
     * @returns The number of elements in the stack.
     */
    size(): number {
        let _wkm = this.wkm.get(this) as Array<T>;
        return _wkm.length;
    }

    /**
     * Returns an array of all elements in the stack.
     * @returns An array of all elements in the stack, or undefined if the stack is empty.
     */
    print(): T[] | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        let _wkm = this.wkm.get(this) as Array<T>;
        let res = _wkm.reverse();
        return res;
    }

    /**
     * Clears all elements from the stack.
     */
    clear(): void {
        this.wkm.set(this, [] as T);
    }
}
