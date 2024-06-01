const obj = {
    name: "alisha",
    age: 30,
    "key-three": true
}

console.log(obj);//{ name: 'alisha', age: 30 }
console.log(obj['age'])//30
console.log(obj['key-three']);//not possible on dot notation(obj.key-three) - true

//insert new key
obj.hobby = 'football'
console.log(obj);// { name: 'alisha', age: 30, 'key-three': true, hobby: 'football' }

//delete key
delete obj.hobby
console.log(obj);//{ name: 'alisha', age: 30, 'key-three': true }

//insert function as a key
const obj2 = {
    name: "alisha",
    age: 30,
    "key-three": true,
    sayMyName: function(){
        console.log(this.name);
    }
}
console.log(obj2);
/*
{
    name: 'alisha',
    age: 30,
    'key-three': true,
    sayMyName: [Function: sayMyName]
  }
*/

// Object.keys(), Object.values(), Object.entires()