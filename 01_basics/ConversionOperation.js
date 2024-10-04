let score = 33;

console.log(typeof"score");
console.log(typeof(score));

/*let score = "33";

console.log(typeof"score");
console.log(typeof(score));

It will be an string
*/
let age = "33abc";

console.log(typeof"age");
console.log(typeof(age));


let valueInNumber = Number(age);
console.log(typeof (valueInNumber));
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1;

let booleanIsLoggedIn = boolean(isLoggedIn);
console.log( booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false

/*
let isLoggedIn = "";

let booleanIsLoggedIn = boolean(isLoggedIn);
console.log( booleanIsLoggedIn);

it will be an false

*/
/*
let isLoggedIn = "yash";

let booleanIsLoggedIn = boolean(isLoggedIn);
console.log( booleanIsLoggedIn);

it will be an true

*/
let someNumber = 33;
let stringNumber =string(someNumber);
console.log(stringNumber);
console.log(typeof(stringNumber));

// ********************************Operations********************************

let value = 3;
let negvalue = -value;
console.log(negvalue);


console.log(2+4);
console.log(2-4);
console.log(2*4);
console.log(2**4);
console.log(2/4);
console.log(2%4);


let str1 = "hello";
let str2 = "Yash";
let str3 = (str1 + str2);
// Output will be :- Hello Yash

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(true);
console.log(+true);
console.log(+"");

let gameCounter = 100;
gameCounter++;
console.log(GameCounter);
                                                                                                                                         
