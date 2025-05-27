"use strict";
let isBeginner = true;
let total = 100;
let name1 = 'Naidu_Sathish';
// Use backticks for template literals!
let sentence = `my Name is ${name1} i am a beginner in typescript`;
console.log(sentence);
let ne = null;
let ue = undefined;
// let isNew: boolean = null;
// let myName: string = undefined;
let list1 = [1, 2, 3];
let list2 = [1, 2, 3];
let person1 = ['link', 12345]; // pupils
//enum
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["green"] = 1] = "green";
    color[color["black"] = 2] = "black";
})(color || (color = {}));
;
let c = color.black;
console.log(c);
console.log("checking the terminal");
(function (color) {
    color[color["Red"] = 9] = "Red";
    color[color["Green"] = 10] = "Green";
    color[color["Black"] = 11] = "Black";
})(color || (color = {}));
;
let ff = color.Black;
console.log(ff);
//Any type
let randomValue = 10;
randomValue = 'hello';
randomValue = true;
randomValue = null;
let myvariable = 20;
console.log(myvariable.name);
myvariable();
myvariable.toUpperCase();
function hasName(obj) {
    return !!obj && typeof obj === 'object' && 'name' in obj;
}
let myvariable_unknow = 20;
console.log(myvariable_unknow);
//myvariable_unknow();
myvariable.toUpperCase();
