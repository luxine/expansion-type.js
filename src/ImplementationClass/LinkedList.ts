import { Node } from "../models/linked-list-models";
import { defaultEquals } from "../util/default";

interface NodeType<T>{
    value: T;
    next: NodeType<T> | null | undefined;
}

export class LinkedListNode<T>{
    head: NodeType<T> | null | undefined;
    count: number;
    equalsFn: (a: T, b: T) => boolean;    
    constructor( equalsFn: (a: T, b: T) => boolean = defaultEquals ){
        this.count = 0;
        this.head = null;
        this.equalsFn = equalsFn;
    }

    push(element: T): void{
        const node: NodeType<T> = new Node(element);
        if(this.head == null){
            this.head = node;
        }else{
            let current = this.head;
            while(current.next != null){
                current = current.next;
            }
            current.next = node;
        }
        this.count++;
    }

    getElementAt(index: number): NodeType<T> | undefined{
        if(index < 0 || index > this.count - 1){
            return undefined;
        }

        let current:NodeType<T> | undefined = this.head as NodeType<T> | undefined ;
        for(let i = 0; i < index; i++){
            current = current?.next as NodeType<T>;
        }
        return current;
    }
    
    removeAt(index: number): T | undefined{
        if(index<0 || index>this.count){
            return undefined;
        }

        if(index == 0){
            const current = this.head;
            this.head = current?.next;
            this.count--;
            return current?.value;
        }
        
        let previous:NodeType<T> |null |undefined = null
        let current :NodeType<T> |null |undefined;
        
        previous = this.getElementAt(index-1) as NodeType<T> | null | undefined
        current = this.getElementAt(index) as NodeType<T> | null | undefined
        
        if(current == null){
            return undefined;
        }

        if(previous){
            previous.next = current?.next;
        }
        
        this.count--;
        return current?.value;
    }
    
    insert(element: T, index: number){
        
    }
    print(): Array<T>{
        let list: Array<T> = []
        let current = this.head
        for(let i = 0; i < this.count; i++){
            list.push(current?.value as T)
            current = current?.next
        }
        return list
    }
}
