"use strict";
//TypeScripts Statically def lanugage
//type Annotations --> num: number -- String:"Sathish"
let fname;
fname = "sathish";
let num;
num = 40;
let n = 50; // Type Annotations
let ln = "naidu";
// Type Inference
let test = "TypeScript"; //Type=string- complie time it will be deceide
let billamount = 600; //Type=number - complie time it will be deceide
let isActive = true;
// null and undefined
let city = null;
let country = undefined;
// any Type
let value = 80;
value = "Hello";
value = true;
//void : function does not return any value:
function print() {
    console.log("Hello");
}
//void and return value shouldn't be in same place
function getnumber() {
    return 50;
}
// any value can be return 
function getanyValue() {
    return "3434";
}
