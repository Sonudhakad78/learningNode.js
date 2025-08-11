const fs = require("fs");
const https = require("https");
console.log("Async JS file loaded");

var a = 107878;
var b = 24124;

fs.readFileSync("./data.json", "utf-8"); //sync
console.log("this will execute only after file read");

https.get("https://dummyjson.com/products/1", (res) => {
  //async
  console.log("fetched succeussfully");
});

setTimeout(() => {
  //async
  console.log("setTimeout executed");
}, 5000);

fs.readFile("./data.json", "utf-8", (err, data) => {
  // async
  console.log("File read successfully", data);
});

function multiply(a, b) {
  const result = a * b;
  console.log(result);
}
multiply(a, b);
