class Person {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
}
class Car {
    constructor(plate) {
        this.plate = plate;
    }
}

module.exports = {Person, Car};