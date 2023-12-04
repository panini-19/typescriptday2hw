// 1. Given the data below, define a type alias for representing users.

// since Dylan does not have a company, put '?' in front of 'company' to make that field optional
type workforce = {
    name: string,
    age: number,
    company?: string
} 

let users = [  
    {
        name:'Shoha Tsuchida',
        age:99,
        company:'Coding Temple'
    },  
    {
        name:'Dylan Katina',
        age:99
    }
];
console.log(users)
// 2. Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.
type days = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday"

let day: days = "Monday"
console.log(day)

// 3. Given the Person class below, create a getter for getting the full name of a person.

class Person {
    constructor(
        public firstName:string, 
        public lastName:string) {
            this.firstName = firstName
            this.lastName = lastName
        }

        printName = (): string =>{
        return `${this.firstName} ${this.lastName}`
    }
}
const fullname = new Person('Dylan', 'Katina')

console.log(fullname.printName())
// 4. Create a new class called "Employee" that extends "Person" and adds a new property called salary. 
class Employee extends Person {
    constructor (
        public firstName:string,
        public lastName:string,
        public salary: number){
            super(firstName, lastName)
        }
        printInfo = (): string=> {
            return `${this.firstName} ${this.lastName} has a annual salary of $${this.salary}`
        }
}
const empSalary = new Employee ('Christian', 'Sachs', 500000)

console.log(empSalary.printInfo())

// 5. Given the data below, define an interface for representing employees:
// HINT: You'll need 2 interfaces.
interface employeeData {
    name: string,
    salary: number,
    address: {}
}

interface address {
    street: string,
    city: string,
    zipCode: number
}


let employee: employeeData = {
    name:'Christian Askew',
    salary:1_000_000,
    address:{
        street:'Thieves st',
        city:'Seattle',
        zipCode: 98101
    }
};

console.log(employee)