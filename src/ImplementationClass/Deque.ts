import { Queue } from "./Queue";
export class Deque extends Queue<any> {
    constructor() {
        super();
    }
    dequeue(){
        throw  new Error("This method is disabled,Please use removeFront() instead.");
    }
    enqueue(){
        throw  new Error("This method is disabled,Please use addBack() instead.");
    }
    peek() {
        throw new Error("This method is disabled,Please use peekFront() / peekBack() instead.");
    }

    addFront(element: any) {
        let _wkm = this.wkm.get(this) as Array<any>;
        _wkm.unshift(element);
    }

    addBack(element: any) {
        return super.enqueue(element);
    }

    removeFront() {
        return super.dequeue();
    }

    removeBack(): void {
        if (super.isEmpty()) {
            return;
        }
        let _wkm = this.wkm.get(this) as Array<any>;
        _wkm.pop();
    }
    peekFront() {
        return super.peek();
    }
    peekBack(){
        if (super.isEmpty()) {
            return undefined;
        }
        let _wkm = this.wkm.get(this) as Array<any>;
        return _wkm[_wkm.length - 1];
    }
}


