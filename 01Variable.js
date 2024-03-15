const accountId = 3432;
let name = 782;
var kvar ="Abhishek"
accountName = "Ravi Kumar";

console.log(accountId);
/*
prefer not to use var
because issue of block scope and functional scope
*/


console.log(name);

console.log(typeof(name));

console.log(kvar);

if (1) {
    var kvar = "kumar";
    console.log(kvar);
    
}

console.log(kvar);


console.table([accountId, name, kvar, accountName]);
