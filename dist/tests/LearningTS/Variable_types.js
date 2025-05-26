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
    color[color["Red"] = 5] = "Red";
    color[color["Green"] = 6] = "Green";
    color[color["Black"] = 7] = "Black";
})(color || (color = {}));
;
let ff = color.Black;
console.log(ff);
console.log("checking the terminal");
