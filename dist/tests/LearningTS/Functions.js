"use strict";
function add1(num1, num2) {
    return num1 + num2;
}
add1(5, 10);
//add(5, "10");
//add()
function add(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add(5);
//default parameters
function add2(num1, num2 = 15) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add2(5);
//withour parameter we can't call function in ts
