function binarySearch(arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (target === arr[mid]) {
      return mid;
    } else if (target < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}
// console.log(binarySearch([-5, 2, 4, 6, 10], 10)); //4
// console.log(binarySearch([-5, 2, 4, 6, 10], 6)); //3
// console.log(binarySearch([-5, 2, 4, 6, 10], 20)); //-1

function search(arr, target, left, right) {
  if (left > right) {
    return -1;
  }
  let mid = left + Math.floor((right - left) / 2);
  if (target === arr[mid]) {
    return mid;
  }
  if (target < arr[mid]) {
    return search(arr, target, left, mid - 1);
  } else {
    return search(arr, target, mid + 1, right);
  }
}
function recursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10)); //4
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6)); //3
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20)); //-1
