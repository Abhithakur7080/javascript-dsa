const LinkedList = require("./Linked_List_2");

class Queue{
    constructor(){
        this.list = new LinkedList()
    }
    enqueue(value){
        this.list.addLast(value)
    }
    dequeue(){
        return this.list.removeFromFront()
    }
    peek(){
        return this.list.head.value;
    }
    isEmpty(){
        return this.list.isEmpty()
    }
    size(){
        return this.list.getSize()
    }
    print(){
        return this.list.print()
    }
}
const queue = new Queue();
console.log(queue.isEmpty());//true

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.print()//10 -> 20 -> 30 -> null

queue.dequeue()
queue.print()//20 -> 30 -> null

console.log(queue.peek());//20

console.log(queue.size());//2