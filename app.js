require("./xyz.js");
// const {s, calculateSum} =require("./sum.js");                  //for sum.js.     // for the type commonjs
// const {multiplication} = require("./multiply.js");
const {s,calculateSum,multiplication}= require("./calculate");
const data = require("./data.json");
// import {calculateSum} from "./sum.js";                           // for the type modeule 
let name= "namaste sonu by Nodejs";
let a= 20;
let b= 10;
console.log(name);
// calculateSum(a,b); for module not commonjs
calculateSum(a,b)  
multiplication(a,b);                            //from sum.js
console.log(s);                                // from sum.js
console.log(data);
console.log(globalThis=== global);  //true;
