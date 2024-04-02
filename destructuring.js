const Person = {
  name: 'Naveen',
  age:45,
  city: 'Bangalore',
  country: 'India'
};

// destructuring without alias
const  {name, age} = Person;
console.log(name, age);

// with alias

const {name: firstPart, age:vayasu, city:ooru} = Person;

console.log(firstPart, vayasu, ooru);