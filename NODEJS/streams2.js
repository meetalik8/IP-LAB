// const https = require('https');
// const fs = require('fs');

// const file = fs.createWriteStream('response.txt');

// https.get('https://www.taylorswift.com', (res) => {
//     res.pipe(file);
// });
const http = require("http");

const server = http.createServer((req, res) => {
  req.on("data", (chunk) => {
    console.log(chunk.toString());
  });

  res.write("Hello, Client!");
  res.end();
});

server.listen(3000);
