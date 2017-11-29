var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var person = { firstName: "Merrick", lastName: "Sapsford" };
var student = new Student("Merrick", "Sapsford");
document.body.innerHTML = greeter(student);
