
function sayName(){
    console.log("A");
    console.log("B");
    console.log("C");
    console.log("D");
    console.log("E");
    
}

// sayName();


// function addTwoNumber(number1, number2){
//     console.log(number1+number2);
    
// }

// addTwoNumber(3,4)


function addTwoNumber(number1, number2){
    return number1+number2;
}

const result = addTwoNumber(3,4)
// console.log("Result : ",result);



function loginUserMessage(username){
    if(!username){
        return "Please Enter the user name";
           
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Abhishek"))
console.log(loginUserMessage(""))
console.log(loginUserMessage()) //undefined