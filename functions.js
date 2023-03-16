function sayHello(){
    console.log('.........');
    console.log('hello!');
    console.log('..........');
}

sayHello();


function sayHello(name){
    console.log('.........');
    console.log('hello' + name+ '!');
    console.log('..........');
}

sayHello('bob');
sayHello('Eliz');
sayHello('David');

function netPay(amount){
    let result = amount - (0.15 * amount);
    return result;
}

let pay = netPay(2000000);
console.log(pay);