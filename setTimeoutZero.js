console.log("hello world");

var a= 107878;
var b= 24124;

// trust issues with setTimeout
setTimeout(()=>{
    console.log("call me ASAP !!!!");
},0);   // it will execute after the current call stack is empty even if the time is 0

setTimeout(()=>{
    console.log("setTimeout executed");
},5000);

function multiply(a,b){ 
    const result= a*b;
    console.log(result);
}
multiply(a,b);