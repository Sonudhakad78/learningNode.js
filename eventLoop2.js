// last line
// nextTick
// promise
// timer expired
// setImmediate
// file read complete
// 2nd nextTick
// 2nd setImmediate.    it is execute before the 2nd timer expired
                        // because the event loop checks for immediate callbacks before timers
                        // because event loop is rested on the poll so it start from the poll not timer
// 2nd timer expired



const fs = require("fs");

setImmediate(()=> console.log("setImmediate"));

setTimeout(()=> console.log("timer expired"),0);

Promise.resolve().then(()=> console.log("promise"));

fs.readFile("data.json","utf-8", ()=>{
    setTimeout(()=>console.log("2nd timer expired"),0);

    process.nextTick(()=> console.log("2nd nextTick"));

    setImmediate(()=> console.log("2nd setImmediate"));

    console.log("file read complete");
})

process.nextTick(()=> console.log("nextTick"));

console.log("last line");