setTimeout(function () { console.log('I waited for 2 seconds') }, 2000);

function getAge(dob){
    let result = 2023-dob; 
    return result;
}

let age = getAge(1997);
console.log(age);

function grossPay(amount){
    let result = amount + (0.15 + amount);
    return result;
}

let Pay = grossPay(2000000)
console.log(Pay);
