const name = "Abhishek"
const repoCount = 50

//console.log(name + repoCount + "Value");

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ('Abhishek Kumar');

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);

// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf(''));

// const newString = gameName.substring(0,5)
// console.log(newString);

const anotherString = gameName.slice(-13,4);
console.log(anotherString);


const newStringOne = "  Abhishek   ";
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://abhishek.com/abhishek%20kumar";
console.log(url.replace('%20','-'));

console.log(url.includes("kumar"));

const gameNameTwo = 'abhi-kumar-ram-kumar';
console.log(gameNameTwo.split('-'));