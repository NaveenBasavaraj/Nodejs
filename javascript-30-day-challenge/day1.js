/*
2667. Create Hello World Function

Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 

Example 1:

Input: args = []
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f(); // "Hello World"

The function returned by createHelloWorld should always return "Hello World".
Example 2:

Input: args = [{},null,42]
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f({}, null, 42); // "Hello World"

Any arguments could be passed to the function but it should still always return "Hello World".
 

Constraints:

0 <= args.length <= 10

*/

// named functions can written like below
function add_two_nums(num1, num2) {
    return num1 + num2; // semicolon is optional
}
console.log(say_hello()) // function hoisting
function say_hello(){
    return "Named Function: HEllo World"
}



// but the problem wants us to return a function > which in turn always returns "hello world"
// we make use of anonymous functions for this
// Also user can pass a list of args and hence we can use spread operator to unpack the args

const createHelloWorld = function() {
    return function(...args){
        return "hello world"
    }
}

console.log(createHelloWorld()()) // notice we are call twice, to avoid call the function inside


const createHelloWorld2 = function() {
    return function(...args){
        return "hello world"
    }()
}

console.log(createHelloWorld2()) // cannot hoist anonymous function


// anonymous function

const add = (a,b) => {
    return a+b
}

console.log("add: ", add(1,2))
// omit return

const f = (a,b) => a+b;
console.log("omit return: ",f(1,2))



//closures
const c = 10;
const add_nums = (a,b) => {
    console.log(a+b+c)
}

add_nums(10,10)

function createCounter() {
    let value = 0; // HIDDEN STATE
    function increment() {
        return ++value;
    }
    return {
        increment: increment
    }
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1.increment())
console.log(counter1.increment())
console.log(counter1.increment())

console.log(counter2.increment())

// ... spread operator

let a = [1,2];
let b = [3,4];

console.log([...a,...b])

function add_first_two_numbers(...args){
    console.log(args[0]+args[1]);
}