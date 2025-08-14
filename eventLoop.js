// a= 100
// this is the end line 
// nextTick executed
// 2nd nextTick executed
// Promise resolved
// timer executed
// Immediate callback executed
// File read completed

const fs= require("fs");
const a=100;
const data = require("./data.json");

setImmediate(()=>{
    console.log("Immediate callback executed");
});

Promise.resolve().then(()=>{
    console.log("Promise resolved");
})

fs.readFile("./data.json", "utf8", ()=>{
    console.log("File read completed",data);
});

setTimeout(()=>{
    console.log("timer executed")
},0);

process.nextTick(()=> {
    process.nextTick(()=> console.log("inner nextTick executed"));
    console.log("nextTick executed");
});

function printA(){
    console.log("a=",a);
}

printA();
console.log("this is the end line ");