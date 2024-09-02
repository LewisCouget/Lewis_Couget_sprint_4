const fruits = ['orange', 'apple', 'banana', 'apples', 'apple', 'mango'];

function isItAnApple(arr) {
  return arr.map(item => item === 'apple');
}

console.log(isItAnApple(fruits));