const map = new Map([['a', 1], ['b', 2]]);
/*
a: 1
b: 2
*/
//add new item
map.set('c', 3)
/*
a: 1
b: 2
c: 3
*/
//check if key in map has or not
console.log(map.has('a'));//true

//delete an item
map.delete('c')
/*
a: 1
b: 2
*/

console.log(map.size);//2

//delete all keys from map
map.clear()

for(const [key, value] of map){
    console.log(`${key}: ${value}`);
}