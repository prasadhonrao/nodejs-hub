const fs = require('fs');
const path = require('path');

// read file synchronously
const data = fs.readFileSync(
  path.join(__dirname, 'files', 'lorem.txt'),
  'utf8'
);
console.log(data);

// read file asynchronously
fs.readFile(path.join(__dirname, 'files', 'lorem.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log('I am done!');

// read file asynchronously and handle file not found error
fs.readFile(path.join(__dirname, 'files', 'lorem.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

process.on('uncaughtException', (err) => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});

// write file synchronously
fs.writeFileSync(__dirname + '/files/numbers.md', '123456789', 'utf8');
console.log('Sync write done');

// write file asynchronously
fs.writeFile(__dirname + '/files/numbers.md', '0000000', 'utf8', (err) => {
  if (err) throw err;
  console.log('Async write done - 1');
});
console.log('Async write done - 2');

// append file synchronously
fs.appendFileSync(__dirname + '/files/odd.md', '13579', 'utf8');
console.log('Sync append done');

// append file asynchronously
fs.appendFile(__dirname + '/files/even.md', '2468', 'utf8', (err) => {
  if (err) throw err;
  console.log('Async append done - 1');
});
