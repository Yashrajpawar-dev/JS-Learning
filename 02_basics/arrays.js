// array

const myArr = [1, 2, 3, 4, 5];

// javascript arrays are resizeable

console.log(myArr[0]);  //  access of arrays


// Array methods 

myArr.push(6);
myArr.push(7);
myArr.pop();
console.log(myArr);

myArr.unshift(0);
myArr.shift()
console.log(myArr.includes(9));
console.log(myArr.indexOf(3));


const newArr = myArr.join()

console.log(myArr);
console.log(newArr);
console.log( typeof newArr);


// slice, splice


console.log("A", myArr);

const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log("c", myArr);
console.log(myn2);




