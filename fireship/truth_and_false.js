/*
when a value is encounted with BOOLEAN context,
ex: with 'if' statement, it will be converted or coereced to a boolean.
if the result is 'true' then the value is truthy .
if the result is 'false' then the value is falsy .

if unsure about value, then use double NOT  ! or double bang !! to confirm

*/

console.log(true); // true
console.log(false); // false
console.log(!true); // false
console.log(!false); // true
console.log(!!true);
console.log(!!false);

console.log(!![]);
