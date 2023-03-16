let a, b, c, d, e;

let names = ['liz', 'dawu', 'tendo','jemi', 'mama'];

[a, b, c, d, e] = names;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

let j, k, l, m, n;

let fruits = ['orange', 'apple', 'berry','banana', 'guava'];

let others;

[j, k, ... others] = fruits;

console.log(j);
console.log(k);
console.log(others);