let myDate = new Date;
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toJSON());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());

//important*
// console.log(typeof myDate);

// let myCreatedDate = new Date(2022, 0, 12);
// let myCreatedDateTime = new Date(2022, 0, 12, 5, 3, 12);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDateTime.toLocaleString());

let myCreatedDate1 = new Date("2023-01-21");
// console.log(myCreatedDate1.toLocaleString());

// let myCreatedDate2 = new Date("01-21-2022");
// console.log(myCreatedDate2.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate1.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()

// console.log(newDate);
// console.log(newDate.getMonth()); //it's start from 0th month so we add 1 to get actual month
// console.log(newDate.getMonth()+1); 
// console.log(newDate.getDay()); 
// console.log(newDate.getTime()); 

console.log(newDate.toLocaleString('default',{
    weekday : "long",
    month : "2-digit"
}));