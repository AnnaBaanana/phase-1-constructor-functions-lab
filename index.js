function Scooter(year,color,model) {
    this.year = year;
    this.color = color;
    this.model = model;
}

function Driver(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
}

function PickupLocation(address, city) {
    this.address = address;
    this.city = city;
}

const volvo = new Scooter(2019, "red", "volvo")
const yanus = new Driver("yanus", 80, 20)
const metro = new PickupLocation("29 Broadway", "new York")

