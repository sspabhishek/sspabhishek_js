// let a =10;
// const b =20;
// var c =30;

let c =90


if(true){
    let a =10;
    const b =20;
    let c =30;
}

// console.log(a);
// console.log(b);
// console.log(c);



function one(){
    const username = "Abhishek";

    function two(){
        const website = "Youtube";
        console.log(username);        
    }
    // console.log(website);
    
    two()
}


// one()

if(true){
    const username = "Abhishek";
    if(username === "Abhishek"){
        const website = " youtube";
        console.log(username + website);
        
    }
    // console.log(website);
    
}

// console.log(username);


// +++++++++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5)) //possible

function addone (num){
    return num + 1
}


// console.log(addTwo(7)); // Not posiible

const addTwo = function(num){
    return num + 2
}







