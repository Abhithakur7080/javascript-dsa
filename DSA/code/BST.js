class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root === null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }
  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }
  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
  inOrder(root) {
    if (root) {
      this.preOrder(root.left);
      console.log(root.value);
      this.preOrder(root.right);
    }
  }
  postOrder(root) {
    if (root) {
      this.preOrder(root.left);
      this.preOrder(root.right);
      console.log(root.value);
    }
  }
  levelOrder() {
    //use the optimized queue implementation
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }
  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }
  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }
  remove(value) {
    this.root = this.removeNode(this.root, value);
  }
  removeNode(root, value) {
    if (root === null) {
      return root;
    }
    if (value < root.value) {
      root.left = this.removeNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.removeNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this.removeNode(root.right, root.value);
    }
    return root;
  }
}
const bst = new BinarySearchTree();
console.log(`Tree is empty? ${bst.isEmpty()}`); //Tree is empty? true

bst.insert(10);
bst.insert(5);
bst.insert(20);
bst.insert(35);
bst.insert(40);
bst.insert(3);
bst.insert(7);

console.log(bst.search(bst.root, 5)); //true
console.log(bst.search(bst.root, 25)); //false
console.log(bst.search(bst.root, 10)); //true

//DFS Algorithms
// bst.preOrder(bst.root);// 10 5 3 7 20 35 40
// bst.inOrder(bst.root)// 5 3 7 10 20 35 40
// bst.postOrder(bst.root)// 5 3 7 20 35 40 10

//BFS Algorithms
// bst.levelOrder(); // 10 5 20 3 7 35 40
/*
        10
        /\
       5  20
      /\   /\
     3 7  35 40
*/

console.log("min:", bst.min(bst.root)); //3
console.log("max:", bst.max(bst.root)); //40

// bst.remove(3)
// bst.levelOrder();// 10 5 20 7 35 40

bst.remove(5)
bst.levelOrder();// 10 7 20 3 35 40
