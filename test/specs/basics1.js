

class Person {
    constructor (firstName,lastName, hairColor){
        this.firstName = firstName ;
        this.lastName = lastName ;
        this.hairColor = hairColor;
    }
    openingStatement(){
        return`Hi my name is ${this.firstName} ${this.lastName}`;
    }
    fingers = 10;
    age =25;
}

let newStudent = new Person('Tim ',"Jones", 'brown');

console.log(newStudent.openingStatement());



