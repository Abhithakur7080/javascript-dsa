const LinkedList = require("./Linked_List_2");

class Stack {
  constructor() {
    this.list = new LinkedList();
  }
  push(value) {
    this.list.addFirst(value);
  }
  pop() {
    this.list.removeFromFront();
  }
  peek() {
    return this.list.head.value;
  }
  isEmpty() {
    return this.list.isEmpty();
  }
  getSize() {
    return this.list.getSize();
  }
  print() {
    return this.list.print();
  }
}
const stack = new Stack();
console.log(stack.isEmpty());//true

stack.push(10);
stack.push(20);
stack.push(30);
stack.print()//30 -> 20 -> 10 -> null

stack.pop()
stack.print()//20 -> 10 -> null

console.log(stack.peek());//20

console.log(stack.getSize());//2
stack.print()//20 -> 10 -> null
