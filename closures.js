function sayHello(name){
    return function(){
        console.log('howdy' + ':' +name);
    }
}

let bob = sayHello('bob');
let liz = sayHello('liz');
let dawudi = sayHello('dawudi');

bob();
liz();
dawudi();
