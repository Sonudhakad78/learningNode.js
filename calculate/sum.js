console.log("this is sum.js file");
s= "Hello world";
// export function calculateSum(a,b){  // for type module not commonjs in package json
function calculateSum(a,b){
    const sum= a+b;
    console.log(sum);
}
module.exports= {s,calculateSum};
// module.exports.s=s; 