const set = new Set([1,2,3])
//[1,2,3]

//add new item
set.add(4)//[1,2,3,4]
set.add(4)//[1,2,3,4](duplicate not allowed)

//check if set has or not
console.log(set.has(4));//true

//delete item
set.delete(3)//[1,2,4]

//check set size
console.log(set.size);//3

//delete all set item or empty set
set.clear()

for(const item of set){
    console.log(item);
}
