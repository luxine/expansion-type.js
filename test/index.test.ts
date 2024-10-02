import { Queue } from "../src/ImplementationClass/Queue";
import { Stack } from "../src/ImplementationClass/Stack";
import  { Deque } from "../src/ImplementationClass/Deque";
import { LinkedListNode } from "../src/ImplementationClass/LinkedList";

const link = new LinkedListNode();

link.push(1);
link.push(2);
link.push(3);
link.push(4);
link.push(5);


console.log(link.removeAt(4));

link.push("hello");
link.push("2024");
console.log(link.removeAt(4));

console.log(link.print());




