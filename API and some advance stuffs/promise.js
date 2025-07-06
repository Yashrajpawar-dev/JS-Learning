const promiseOne = new Promise(function(resolve, reject){
 setTimeout(function(){
console.log('Async task is complete');
    resolve()
  },1000) 
})
promiseOne.then(function(){
    console.log('promise Consumed');

})



new Promise(function(resolve, reject){
  

setTimeout(function(){
  console.log('asyn2 is workin')
    resolve()
},1000)

})
.then(function(){
    console.log('Async task 2 is complete');
})

const promiseThree = new Promise(function(resolve, reject){
 setTimeout(function(){
console.log('Async 3 task is complete');
    resolve({name: 'yash', age:'18'})
  },1000) 
})
promiseThree.then(function(user){
    
console.log(user);

})
const promisefour = new Promise(function(resolve, reject){
  setTimeout(function(){
    let error = false;
    if(!error){
        resolve({name: 'yash', age:'18'})
    }else{
        reject('Error: Something went wrong')
    }
  },1000)
})
promisefour.then((user)=>{
    console.log(user);
    return user.username
    
}).then((username)=>{
    console.log(username);
    
}).catch((error)=>{
    console.log(error);
    
}).finally(() => 
  console.log("The promise is completed")
);
const promisefive = new Promise(function(resolve, reject){
  setTimeout(function(){
    let error = false;
    if(!error){
        resolve({Username: 'yash', Password:'123456'})
    }else{
        reject('Error: JS went wrong')
    }
  },1000)
})

async function consumePromisFive(params){

try {
   const data = await promisefive;
 console.log(data);
 
} catch (error) {
  console.log(erorr);
  
}
} 
consumePromisFive()

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}
getAllUsers()


fetch('https://api.github.com/users/Yashrajpawar-dev')
.then((response)=>{
  return response.json()
}).then((data)=>{
  console.log(data);
  
}).catch((error) => console.log(error))
