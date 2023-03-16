let originalCar = {
    make: 'bmw',
    model: '745li',
    year: 2010
};

let newCar = Object.create(originalCar);

console.log(newCar.make);

console.log(Object.getPrototypeOf(newCar));

originalCar.doors = 4;
console.log(newCar.doors);

newCar.make = 'benz'
console.log(newCar.make);