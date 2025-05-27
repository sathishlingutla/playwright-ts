class Employee {
    employeeName: string;

    constructor(name: string) {
        this.employeeName = name;
    }

    greet() { 
        console.log(`Hello, my name is ${this.employeeName}`);
    }
}

let employee1 = new Employee("John");
console.log(employee1.employeeName);
employee1.greet();


class Manager extends Employee {
    constructor(managerName: string){

        super(managerName);
    }

    delegateWork(){
        console.log("Manager Delegating task");
    }
}

let m1 = new Manager("prathavi")
m1.delegateWork();
m1.greet();

console.log(m1.employeeName);