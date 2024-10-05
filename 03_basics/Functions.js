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
  