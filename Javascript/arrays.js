let fruits = ["Apple", "Mango", "Banana"];
console.log(fruits.length);

fruits.push("Kiwi");        //adds element at the end of the array
fruits.unshift("Cherry");   //adds element at the begining of the array
console.log(fruits);

fruits.splice(3, 0, "Grapes");
fruits.pop();               //removes the last element from the array
fruits.shift();             //removes the first element from the array
console.log(fruits);

fruits.forEach(myFunction);

function myFunction(value, index, array) {
    console.log(value);
}
