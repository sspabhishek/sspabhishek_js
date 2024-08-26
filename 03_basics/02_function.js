function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(400,300,500,2000));

const user = {
    username : "Abhishek",
    price : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);   
}

// handleObject(user);

handleObject({
    username :"sam",
    price : 499
})

const myNewArray = [200, 300, 400, 600]

function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([4323,53,232,123]));
