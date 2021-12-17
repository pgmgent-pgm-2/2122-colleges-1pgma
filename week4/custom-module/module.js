function User (id, name, age, email) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.email = email;

    this.getUserInfo = () => {
        return `UUID: ${this.id}. Naam: ${this.name}. Email: ${this.email}`;
    }
}

function Animal (breed, legs) {
    this.breed = breed;
    this.legs = legs;

    this.getAnimalInfo = () => {
        return `Ras: ${this.breed}. Poten: ${this.legs}`;
    }
}

module.exports = {
    User,
    Animal
};