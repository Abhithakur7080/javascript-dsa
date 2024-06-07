class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  addFirst(value) {
    //prepend
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  addLast(value) {
    //append
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }
  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    return value;
  }
  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
    }
    this.size--;
    return value;
  }
  print() {
    if (this.isEmpty()) {
      console.log("List is Empty.");
    } else {
      let curr = this.head;
      let listValues = "";
      let index = 0;
      while (curr) {
        listValues += `${curr.value} -> `;
        index++;
        if (this.getSize() === index) {
          listValues += "null";
        }
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
}
/*

const list = new LinkedList();
console.log("List is empty?", list.isEmpty()); //true
console.log("List size:", list.getSize()); //0
list.print(); //List is Empty.

list.addFirst(10);
list.print(); //10 -> null

list.addFirst(20);
list.addFirst(30);
list.print(); //30 -> 20 -> 10 -> null

list.addLast(5);
list.addLast(10);
list.addLast(15);
list.print(); //30 -> 20 -> 10 -> 5 -> 10 -> 15 -> null

console.log(list.removeFromFront())//30
list.print()//20 -> 10 -> 5 -> 10 -> 15 -> null

console.log(list.removeFromEnd());//15
list.print()//20 -> 10 -> 5 -> 10 -> null

*/

module.exports = LinkedList