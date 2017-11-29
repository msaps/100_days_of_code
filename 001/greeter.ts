interface Person {
    firstName: String;
    lastName: String;
}

class Student {
    fullName: String;

    constructor(public firstName: string, public lastName: string) {
        this.fullName = firstName + " " + lastName
    }
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let person = { firstName: "Merrick", lastName: "Sapsford" }
let student = new Student("Merrick", "Sapsford")

document.body.innerHTML = greeter(student);