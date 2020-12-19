// Require file system access
const fs = require('fs');

// Read file buffer 
const imgBuffer = fs.readFileSync('test-pattern.jpg');

// Encode image buffer to hex
const imgHexCode = new Buffer.from(imgBuffer).toString('hex');

// Output encoded data to console
console.log(imgHexCode);

// Decode hex
const imgHexDecode = new Buffer.from(imgHexCode, 'hex');

// Save decoded file file system 
fs.writeFileSync('imgDecoded.jpg', imgHexDecode);