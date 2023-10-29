const fs = require('fs');
const readableStream = fs.createReadStream('input.txt');
const writableStream = fs.createWriteStream('output.txt');
readableStream.pipe(writableStream);
writableStream.on('finish', () => {
    console.log('Data has been written to output file');
});
