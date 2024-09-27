import { Node } from "../models/linked-list-models";
import { defaultEquals } from "../util/default";
export class LinkedListNode<T>{
    head: T | undefined;
    count: number;
    equalsFn: (a: T, b: T) => boolean;    
    constructor( equalsFn: (a: T, b: T) => boolean = defaultEquals ){
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn;
    }
}