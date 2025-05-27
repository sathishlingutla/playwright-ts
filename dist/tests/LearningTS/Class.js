"use strict";
class Employee {
    constructor(name) {
        this.employeeName = name;
    }
    greet() {
        console.log(`Hello, my name is ${this.employeeName}`);
    }
}
let employee1 = new Employee("John");
console.log(employee1.employeeName);
employee1.greet();
