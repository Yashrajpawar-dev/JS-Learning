// immediately Invoked function Expessions (IIFE)
(
function chai() {
    console.log(" DB Connected");
    
})();

( (name)=>{
    console.log(`DB connected two ${name}`);
})("yash")

