export class Node{
    value: any;
    next: any | undefined;
    constructor(element: any){
        this.value = element;
        this.next = undefined;
    }
}