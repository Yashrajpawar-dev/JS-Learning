 const name = "Yash";
 const repoCount = 50;

 // console.log(name + repoCount + "value");

 console.log(`Hello my name is ${name} ansd my repo count is ${repoCount}`);
 

 const  gameName = new String("yash");

 console.log(gameName[0]);
 console.log(gameName.__proto__);

 
 console.log(gameName.length);
 console.log(gameName.toUpperCase());
 console.log(gameName.charAt('2'));
 console.log(gameName.indexOf('t'));


  const newString = gameName.substring(0,4);
  console.log(newString); 

  const anotherString = gameName.slice(-8, 4);
  console.log( anotherString);

  const newStringOne = "   yash  ";
  console.log(newStringOne);
  console.log(newStringOne.trim());

  const url = "https://yash.com/yash%20pawar";

 console.log( url.replace("%20", '-'));


 console.log( url.includes("Casio"));

 console.log(gameName.split("-"));