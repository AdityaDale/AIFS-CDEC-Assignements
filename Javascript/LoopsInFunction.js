//Find Even numbers in an array
function findEvenNumber(arr) {
  let output = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) output.push(arr[i]);
  }

  return output;
}

//Find the highest number in an array
function findMaxNumber(arr) {
  let max = arr[0];
  let i = arr.length;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

//Count even numbers in an array
function countEvenNumbers(arr) {
  let i = arr.length;
  let count = 0;

  while (i > 0) {
    if (arr[i] % 2 === 0) count++;
    i--;
  }
  return count;
}

//Reverse a string
function reverseString(str) {
  let i = str.length - 1;
  let output = "";

  while (i >= 0) {
    output += str[i];
    i--;
  }
  return output;
}

//Check if number is Prime
function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

let arr = [1, 45, 26, 88, 90, 34, 21];
console.log(findEvenNumber(arr));
console.log(findMaxNumber(arr));
console.log(countEvenNumbers(arr));

let str = "Hello";
console.log(reverseString(str));

let num = 23;
console.log("Is " + num + " a prime number : " + isPrime(num));
