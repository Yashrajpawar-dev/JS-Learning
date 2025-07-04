const user = {
    username: "yash",
    Price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}
user.welcomeMessage();
user.username ="samay";
user.welcomeMessage();

console.log(this);


// function chai(){
//     let username = "yash"
//     console.log(this.username)
    
// }
// chai();

const chai =() => {
    let username = "yash"
    console.log(this)
}
chai()
// const addTwo = (num1, num2) =>{
//     return num1 + num2
// }
// console.log(addTwo(5, 8));

// const addTwo = (num1, num2) =>  num1 + num2;

// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) => ({username: "yash"})
console.log(addTwo(5, 8));