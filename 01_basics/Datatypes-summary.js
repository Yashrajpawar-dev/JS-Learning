// primitive 

// 7 types : String, Number, boolean, Null, Undifined, Symbol, Bigint 

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
 
let userEmail;  // undifined

// const id = symbol("123");
// const anotherId = symbol("123")



// console.log(id === anotherId);

const bigNumber = 345634344243444n;

const heroes = ["shaktiman", "nagraj", "doga"];
let myObj ={
     name: "yash",
     age: 17, 
};

const myFunction = function(){
     console.log("hello world!");
     

}

console.log(typeof bigNumber);
console.log(typeof myFunctio);
console.log(typeof heroes);
console.log(typeof id);



// Reference (Non primitive)

// Array, Object, Functions


// Stack (primitive), Heap (Non-primitive)

let myYoutubeName = "Yashrajpawar-dev";
 let anotherName =  myYoutubeName ;
 anotherName = "Yashrajpawar-Engineer";

 console.log(myYoutubeName);
 console.log(anotherName);

 let user = {
      email: "Yashrajpawar-dev@google.com",
      upi: "Yashraj-dev@cybl",

 }

 let user2 = user;

 user2.email = "Yash@gmail.com";

 console.log(user.email);
 console.log(user2.email);
 