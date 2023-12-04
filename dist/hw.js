"use strict";
let users = [
    {
        name: 'Shoha Tsuchida',
        age: 99,
        company: 'Coding Temple'
    },
    {
        name: 'Dylan Katina',
        age: 99
    }
];
let day = "Monday";
console.log(day);
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.printName = () => {
            return `${this.firstName} ${this.lastName}`;
        };
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
const fullname = new Person('Dylan', 'Katina');
console.log(fullname.printName());
class Employee extends Person {
    constructor(firstName, lastName, salary) {
        super(firstName, lastName);
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
        this.printInfo = () => {
            return `${this.firstName} ${this.lastName} has a annual salary of $${this.salary}`;
        };
    }
}
const empSalary = new Employee('Christian', 'Sachs', 500000);
console.log(empSalary.printInfo());
let employee = {
    name: 'Christian Askew',
    salary: 1000000,
    address: {
        street: 'Thieves st',
        city: 'Seattle',
        zipCode: 98101
    }
};
console.log(employee);
