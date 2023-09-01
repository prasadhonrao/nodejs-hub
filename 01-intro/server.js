// welcome
console.log('welcome to nodejs');

// global variable
console.log(global);

// built-in modules - os
const os = require('os');
console.log(os);
console.log(os.platform(), os.homedir());
console.log(os.hostname());

// special variables
console.log(__dirname);
console.log(__filename);

// built-in modules - path
const path = require('path');
console.log(path);
console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

// parse path and get properties
const { root, dir, base, ext, name } = path.parse(__filename);
console.log(root, dir, base, ext, name);
