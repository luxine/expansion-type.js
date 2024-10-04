import { DoublyNode } from "../models/linked-list-models";
import { defaultEquals } from "../util/default";
import { LinkedListNode } from "./LinkedList"

interface DoublyNodeType<T>{
    value: T;
    next: DoublyNodeType<T> | null | undefined;
    previous: DoublyNodeType<T> | null | undefined;
}

export class DoublyLinkedList<T> extends LinkedListNode<T>{
    
    tail: DoublyNodeType<T> | undefined;
    constructor(equalsFn: (a: T, b: T) => boolean = defaultEquals){
        super(equalsFn);
        this.tail = undefined;
    }
}