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

link.push("hello");
link.push("2024");
link.push(true);


console.log(link.size());
console.log(link.print());
console.log(link.insert(6, 1));
console.log(link.print());
console.log(link.indexOf(1));

