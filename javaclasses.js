//declaration
//constructor is a key word and its the only way to declare classes in java
class Car{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    print(){
        console.log(`${this.make} ${this.model} (${this.year})`);

    }
}

let myCar = new Car ('bmw', '745li', 2012);
myCar.print(); 

class sportsCar extends Car{

}
let mysportsCar = new sportsCar('dodge', 'viper', 2011);

mysportsCar.print();

//expression
//let car = class{
//}