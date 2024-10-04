// Dates

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(typeof(myDate));

// let myCreatedDate = new Date(2024, 0, 23);
// let myCreatedDate = new Date(2024, 0, 23, 5, 3);
// let myCreatedDate = new Date("2024-01-13");
 let myCreatedDate = new Date("01-20-2024");
console.log(myCreatedDate.toDateString());


let myTimeStamp = Date.now();
console.log( myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor (Date.now()/1000));

let newDate = new Date();
console.log( newDate);
console.log( newDate.getDay() + 1);
console.log( newDate.getMonth());

// `${newDate.getDay()} and the time`;

newDate.toLocaleString("default",  {
      weekday: "long",
      timeZone: "long",
})