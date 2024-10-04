// singleton

// Object literals
// Object.create

const mySym = ("key1");

const JsUser = {
    name:"Yash",
    "full name":"Yashraj Sandip Pawar",
    [mySym]: "myKey1",
    age:17,
    location:"Pune",
    email:"yashrajpawar@google.com",
    isLoggedin:false,
    lastLoggedIn: ["Thursday", "Friday"]
    
};

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);
JsUser.email = "yash@chatgpt.com";
// Object.unfreeze(JsUser);
JsUser.email = "yash@microsoft.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS User");
    
};

JsUser.greetingTwo = function(){
    console.log(`Hello JS User ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

