// Object Orient Programming

function Personito (first, last, f) {
    this.firstName = first;
    this.lastName = last;
    this.funct = f;

    this.toCLIString = function () {
        console.log(`${this.funct}: ${this.firstName} ${this.lastName}`);
    }
}

const klasverantwoordelijke = new Person('Nikita', 'Modaal');
const klasclown = new Person(); 

console.log(klasverantwoordelijke.firstName);

const worker = new Person('Jan', 'Modaal', 'Werker');
worker.toCLIString();

// Class

class Person {
    constructor (first) {
        this.firstName = first;
    }

    toCLIString() {
        console.log(this.firstName);
    }
}