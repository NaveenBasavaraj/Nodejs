const animal = {
  dna: '🧬'
};

const dog = {
  face : '🐶'
};

Object.setPrototypeOf(dog, animal);
console.log(dog.dna);
console.log(Object.getPrototypeOf(dog)=== animal);
console.log(animal.face);
console.log(Object.getPrototypeOf(animal) === Object.prototype);