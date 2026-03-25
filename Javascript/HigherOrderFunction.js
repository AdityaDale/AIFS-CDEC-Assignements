//Find even numbers in an array
function getEvenNumbers(arr) {
  //The filter function is used to create a new array containing elements that satisfy a given condition.
  return arr.filter((num) => num % 2 === 0);
}

//Square the numbers in an array
function squareNumbers(arr) {
  //The map function is used to transform an array by applying a callback function to each element. It returns a new array.
  return arr.map((num) => num * num);
}

//Sum of all the elements in an array
function sumOfArray(arr) {
  //The reduce function accumulates array elements into a single value based on a callback function.
  return arr.reduce((sum, num) => sum + num, 0);
}

//Count the even numbers in an array
function countEvenNumbers(arr) {
  return arr.reduce((count, num) => {
    return num % 2 === 0 ? count + 1 : count;
  }, 0);
}

//Chain multiple HOF's
function processNumber(arr) {
  return arr
    .filter((num) => num % 2 === 0)
    .map((num) => num * 2)
    .reduce((sum, num) => sum + num, 0);
}

let arr = [1, 42, 23, 54, 87, 33];
console.log(getEvenNumbers(arr));
console.log(squareNumbers(arr));
console.log(sumOfArray(arr));
console.log(countEvenNumbers(arr));
console.log(processNumber(arr));
