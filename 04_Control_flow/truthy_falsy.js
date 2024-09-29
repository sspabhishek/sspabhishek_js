const userEmail = "abhi@gmail.com"

if(userEmail){
    console.log("Got user Email");
}else{
    console.log("Don't have user email");
}

// falsy value
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy value
// [], "0", 'false', " ",{}, function(){}

const emptyArray = []

if(emptyArray.length === 0){
    console.log("Array is Empty");    
}

const empatyObj = {}

if(Object.keys(empatyObj).length === 0){
    console.log("Object is Empty");
    
}


// Nullish Coalescing Operator (??) -> (null, undefined)

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 15

// val1 = null ?? 10 ?? 20

console.log(val1);


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100

console.log(iceTeaPrice <= 80 ? "Less then 80" : "More then 80");
