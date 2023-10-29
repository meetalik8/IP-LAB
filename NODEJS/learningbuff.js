// import { Buffer } from 'buffer';
const { Buffer } = require("buffer");
var buff1 = new Buffer(10);
var buff2 = new Buffer([10, 20, 30]);
var buff3 = new Buffer("String","utf-8"); //

var len = buff1.write("Hello");
console.log("Octets written: "+len);

