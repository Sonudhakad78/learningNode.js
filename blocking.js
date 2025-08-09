const crypto= require("node:crypto");
console.log("hello world");

var a= 107878;
var b= 24124;

// block the thread so never use it
crypto.pbkdf2Sync("password", "salt", 50000000, 60, "sha512");    // Sync 
console.log("sync key generated");

//pdkdf2: Full form is Password-Based Key Derivation Function 2

// this will not block the thread
crypto.pbkdf2("password", "salt", 5000000, 60, "sha512", (err, key)=> {  // Async
    console.log("Async key generated");
});
function multiply(a,b){ 
    const result= a*b;
    console.log(result);
}
multiply(a,b);
