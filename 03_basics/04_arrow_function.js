const user = {
    username : "Abhishek",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}



// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);



// function chai(){
//     let username = "Abhisehk";
//     console.log(this.username);
    
// }
// chai();


// const chai = function(){
//     let username =  "abhishek";
//     console.log(this.username);
    
// }
// chai();

// const chai = () => {
//     let username =  "abhishek";
//     console.log(this);
    
// }
// chai();


// const addTwo = (num1, num2) => {
//         return num1+num2             //Explicit return
// }
// const addTwo = (num1, num2) =>  num1+num2   //impliocit return
// const addTwo = (num1, num2) =>  (num1+num2 )  //impliocit return

// console.log(addTwo(7,9));


const addTwo = () =>  ({username : "Abhishek"})
console.log(addTwo());

