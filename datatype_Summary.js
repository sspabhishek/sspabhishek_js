//Primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false ;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id);
console.log(anotherId);
console.log(id === anotherId);


const bigNumber = 145454444544545487844556545n

//Reference (Non primitive)

//Array, Objects, Functions

const heros = ["shaktiman", "naagraj","doga"];

let myObj = {
    name : "Abhishek",
    age : 24
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);