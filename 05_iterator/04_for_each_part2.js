const coding = ["js", "ruby", "java", "python", "cpp"];

// const value = coding.forEach( (item) => {
//     // console.log(item);
//     return item;
    
// })
// console.log(value);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 

// const newNums = myNums.filter( (num) => num > 4) //implicit return when you do not use {} bress
// console.log(newNums);

// const newNums = myNums.filter( (num) => {
//     return num > 4                           //Explicit return when you use {}
// })
// console.log(newNums);


// const newNums = [];

// const value = myNums.forEach( (item) => {
//     if(item > 4) newNums.push(item);
// })
// console.log(newNums);


const books = [
    {title : 'Book One', genre : 'Fiction', publish : 1981, edition : 2004},
    {title : 'Book Two', genre : 'Non-Fiction', publish : 1992, edition : 2008},
    {title : 'Book Three', genre : 'History', publish : 1999, edition : 2007},
    {title : 'Book Four', genre : 'Non-Fiction', publish : 1989, edition : 2010},
    {title : 'Book Five', genre : 'Science', publish : 2009, edition : 2014},
    {title : 'Book Six', genre : 'Fiction', publish : 1981, edition : 2004},
    {title : 'Book Seven', genre : 'History', publish : 1971, edition : 2000},
    {title : 'Book Eight', genre : 'Science', publish : 1996, edition : 2004},
    {title : 'Book Nine', genre : 'Fiction', publish : 1986, edition : 2006},
    {title : 'Book Ten', genre : 'History', publish : 2011, edition : 2016}
];


let userBooks = books.filter(  (bk) => bk.genre === 'History')
userBooks = books.filter( (bk) => {
    return bk.publish >= 2000 && bk.genre === 'History'
})

console.log(userBooks);
