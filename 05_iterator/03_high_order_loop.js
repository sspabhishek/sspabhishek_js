// for of loop

// ["", "", ""];
// [{}, {}, {}];

const arr = [1,2,3,4,5,6];

for(const num of arr){
    // console.log(num);    
}

const greeting = "Hello world";

for (const greet of greeting) {
    // console.log(`Each char is ${greet}`);
}

// Map

const map = new Map();

map.set('IN',"India")
map.set('USA',"United State of America")
map.set('Fr',"France")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key ,':-', value);
}

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// for (const [key, value] of myObject) { // Not worked for Objects there is another method
//      console.log(key ,':-', value); 
// }