const myObject = {
    'js' : 'JavaScript',
    'py' : 'python',
    cpp : 'c++',
    swift : 'swift by apple',
    rb : 'ruby'
}

for (const key in myObject) {
    // console.log(`${key} :- ${myObject[key]}`);  
}


const programming = ["js", "rb", "py", "java","cpp"];

for (const key in programming) {
    // console.log(key);
}

// Map
// const map = new Map();

// map.set('IN',"India")
// map.set('USA',"United State of America")
// map.set('Fr',"France")

// for (const key in map) {
//     console.log(map);
    
// }

// Maps are not iterable.....!!!