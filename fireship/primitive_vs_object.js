/*
Primitives are lowest level building blocks of js
Primitives are immutable
- undefined
- null
- string
- number
- bigint
- boolean
- symbol

Anything that is not primitive is an object (or a descendant)
objects are key/value paired collections
they are building blocks of complex data structures

*/

console.log(typeof undefined); // undefined
console.log(typeof null); // null
console.log(typeof "hello"); // string
console.log(typeof 12); // number

console.log(typeof []); // object
console.log(typeof {}); // object
console.log(typeof function() {}); // function

