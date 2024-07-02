const obj1 = {
  a:1,
  b:2,
  c:3
};

const obj2 = {
  ...obj1,
  d:4
};

console.log(obj2);

const array1 = [1,2,3,4];
const array2 = [...array1, 5,6,7];

console.log(array2);