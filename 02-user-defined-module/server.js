// import user module
const math = require('./math.js');

// import user module and destructure
const { multiply, divide } = require('./math.js');

console.log(math.add(1, 2));
console.log(math.subtract(1, 2));

console.log(multiply(1, 2));
console.log(divide(10, 2));
