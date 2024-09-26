export class Node{
    element: any;
    next: any | null;
    constructor(element: any){
        this.element = element;
        this.next = null;
    }
}