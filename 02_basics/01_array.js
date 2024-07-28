// Array

// JavaScript arrays are resizable and can contain a mix of different data types.

// JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Saktiman", "Ironman"]

const myArr2 = new Array(1,2,3,4,5)
console.log(myArr[1]);

// Array Methods

// myArr.push(6)
// myArr.push(7)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);


// myArr.unshift(9)
// console.log(myArr);
// myArr.shift() // shift remove first element
// console.log(myArr);


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

const newArr = myArr.join()


// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


// slice, splice
console.log("A", myArr);

const mya1 = myArr.slice(1,3)
console.log(mya1);
console.log("B", myArr);


const mya2 = myArr.splice(1,3)
console.log(mya2);
console.log("C", myArr);
