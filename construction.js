/* let laptop = {
    make: 'lenovo',
    model: 'E14',
    year: 2021,
    ram: 16,
} */

function laptop(make, model, year, ram){
    this.make = make;
    this.model = model;
    this.year = year;
    this.ram = ram;
}

let myLaptop = new laptop ('lenovo', 'E14', 2021, 16);

console.log(myLaptop);
