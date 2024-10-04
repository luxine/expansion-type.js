export class Node{
    value: any;
    next: any | undefined;
    constructor(element: any){
        this.value = element;
        this.next = undefined;
    }
}

export class DoublyNode extends Node{
    previous: any | undefined;
    constructor(element: any,next?: any,previous?: any){
        super(element);
        this.next = next;
        this.previous = previous;
    }
}