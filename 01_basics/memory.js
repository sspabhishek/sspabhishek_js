// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (Premitive) : number, boolean, string etc
// Heap(Name Space) : object etc.

let myYoutubename = "hiteshchoudharydotcom";

let anothername = "chaiaurcode";

console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email : "sspabhishek@gmail.com",
    upi : "sspabhishek@ybl"
}

let userTwo = userOne;

userTwo.email = "abhishekprajapati243@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);
