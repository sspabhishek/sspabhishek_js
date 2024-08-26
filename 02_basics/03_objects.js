// There are two method to create a object in javascript
// 1. Using Literals
// 2. Using Constructor


// singleton : when we create objects using constructor it's always make singleton and the other side when we create objects using literals it's never a singleton object


// Object.create //singleton objects


// 1. Literals Objects
const mySym = Symbol("Key1") 

const JsUser = {
    name : "Abhishek",
    age : 24,
    [mySym] : "MyKey2",
    "full name" : "Abhishek Kumar",
    location : "delhi",
    email : "sspabhishek@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(JsUser.name);
// // console.log(JsUser.full name);  //Not possible to access this data
// console.log(JsUser["full name"]); // the only method to access this
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

JsUser.email = "abhishekkumar@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "kumarabhishek@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS users");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS users ${this.name}`);
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
 // Note : The output is undefined because of the console.log(JsUser.greeting()); statement. In JavaScript, when you call a function with parentheses (like greeting()), it executes the function. Since the greeting function doesn't return any value, it implicitly returns undefined. Therefore, console.log(JsUser.greeting()); logs undefined after executing the function.

JsUser.greeting(); // that is not give undefined
