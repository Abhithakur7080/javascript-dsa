const arr = [1, 2, 3, "abhi"];
// console.log(arr[0]);//1

arr.push(4)//add to end of array
//[1, 2, 3, "abhi", 4]
arr.unshift(0)//add to start of array
//[0, 1, 2, 3, "abhi", 4]
arr.pop()//remove from end of array
//[0, 1, 2, 3, "abhi"]
arr.shift()//remove from start of array
//[1, 2, 3, "abhi"]

for(const item of arr){
    console.log(item);
}

//map, filter, reduce, concat, slice and splice