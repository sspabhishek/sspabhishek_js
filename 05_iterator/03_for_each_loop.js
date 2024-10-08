const coding = ["js", "ruby", "java", "cpp", "swift"]


// coding.forEach( function (item) {
//     console.log(item);    
// } )


// coding.forEach( (item) => {
//     console.log(item);    
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe);


// coding.forEach(  (item, index, arr)  => {
//     console.log(item, index, arr);
    
// } )


const myCoding = [
    {
        languageName : "javaScript",
        langugeFileName : "js"
    },
    {
        languageName : "cpp",
        langugeFileName : "c++"
    },
    {
        languageName : "python",
        langugeFileName : "py"
    }
]

myCoding.forEach(  (item) => {
    console.log(item.languageName);
    
}  )