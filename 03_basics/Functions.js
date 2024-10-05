function sayMyname(){
console.log("Y");
console.log("A");
console.log("S");
console.log("H");
}
sayMyname();

function addTwoNumbers(number1, number2){
  let result = number1 + number2
  return result
   
}
// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
    
//  }
 
addTwoNumbers(4, 5);
addTwoNumbers(4, "5");
addTwoNumbers(4, "a");
addTwoNumbers(4, null);

const result = addTwoNumbers(3, 5)


console.log("Result:", result); 


function loginUserMessage(username = "yash"){
    if(!username){
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}
  console.log( loginUserMessage("yash"));
  
  console.log( loginUserMessage());


  function calculateCartPrice(num1){
    return num1
  }
  function calculateCartPrice(val1, val2,...num1){
    return num1
  }

console.log(calculateCartPrice(200, 300, 500, 2000));




const user = {
  username: "yash",
  price: 139
}
function handleObject(anyobject){
console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}

// handleObject(user);
handleObject({
  username: "samay",
  price: 599
}

)
const myNewArray = [200, 400, 500, 700]

function returnSecondValue(getarray){
  return getarray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 700]));

