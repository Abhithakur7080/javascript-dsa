/*
class Queue{
    constructor(){
        this.items = []
    }
    enqueue(element){
        this.items.push(element);
    }
    dequeue(){
        return this.items.shift();
    }
    isEmpty(){
        return this.items.length === 0;
    }
    peek(){
        if(!this.isEmpty()){
            return this.items[0];
        }
        return null;
    }
    size(){
        return this.items.length;
    }
    print(){
        console.log(this.items.toString());
    }
}
const queue = new Queue()

console.log(queue.isEmpty());//true

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

console.log(queue.size());//3

queue.print()//10,20,30

console.log(queue.dequeue());//10

queue.print()//20,30

console.log(queue.peek());//20
*/

//using two pointers
class Queue {
  constructor() {
    this.items = [],
    this.rear = 0,
    this.front = 0
  }
  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }
  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }
  isEmpty() {
    return this.front - this.rear === 0;
  }
  peek() {
    return this.items[this.front];
  }
  size() {
    return this.rear - this.front;
  }
  print() {
    console.log(this.items);
  }
}
const queue = new Queue();

console.log(queue.isEmpty()); //true

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.size()); //3

queue.print(); //[10,20,30]

console.log(queue.dequeue()); //10

queue.print(); //[ <1 empty item>, 20, 30 ]

console.log(queue.peek()); //20
