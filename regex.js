let pattern = /xyz/;
console.log(pattern);
console.log(typeof pattern);

let value = 'This is xyz test';
console.log(pattern.test(value));

console.log(value.replace(pattern, 'just'));

console.log(value.match(pattern));
