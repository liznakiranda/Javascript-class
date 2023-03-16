let laptop = {
    make: 'lenovo',
    model: 'E14',
    year: 2021,
    ram: 16,

    getPrice: function(){
        return 4000000;
    },
    printDescription: function(){
        console.log(this.make + ' '+ this.model);
    }
}

laptop.printDescription();
console.log(laptop.year);
