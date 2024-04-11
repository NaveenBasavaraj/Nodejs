/*
Function can be broken into:
1. Name
2. Parameters (inputs)
3. Body (logic)
*/

// example

function addNumbers(a, b) {
  return a + b;
}
console.log(addNumbers(2, 3));

/*
- Function declaration is useless on its own.
- we can make use by calling the function.
- return value can be assigned to a variable.
1. Function call. Executes the code inside the function body.
2. Arguments. The values to be used as parameters in the function.
3. Return value. By default functions will return undefined, but can return the result of a computation when the body contains a return statement.
*/
// function declarations are loaded before any code is executed.
console.log(makeBread(2));

function makeBread(qty) {
  return "🍞".repeat(qty);
}

// function as an expression: assigning any anonymous function to a variable
const makeBeer = function (qty) {
  return "🍺".repeat(qty);
};
// but function expressions are not hoisted
console.log(makeBeer(10));
