// IF ELSE STATEMENTS
let number = Math.floor(Math.random() * 10);
if (number == 8 || number == 4) {
  console.log(`${number} is a correct number!`);
} else {
  console.log(`${number} is not the correct number`);
}
console.log();
// LOOPS
let people = [
  "Taylor Swift",
  "Jude Bellingham",
  "Lorde",
  "Deepika Padukone",
  "Gio Reyna",
];
for (let i in people) {
  console.log(`${people[i]} is a person in the array`);
}
console.log();
for (let person of people) {
  console.log(`${person} is a celebrity!`);
}
console.log();
let money = [12, 34, 75, 3, 90];
let sum = 0;
const earning = (paid) => {
  sum = sum + paid;
};
money.forEach(earning);
console.log(`${sum} is what I earned this week`);

// while loops
let n = 3;
let i = 0;
while (i < n) {
  console.log(i);
  i++;
}
do {
  console.log(i);
  i++;
} while (i < n);
console.log();

// FUNCTIONS
// let people =['Taylor Swift','Jude Bellingham','Lorde','Deepika Padukone','Gio Reyna'];
// parameter function
let addingTwo = (x, y) => {
  return x + y;
};
console.log(addingTwo(5, 4));
console.log();
// rest parameter
let celebrity = function (...args) {
  console.log(args);
};
celebrity(people);
console.log();
// Iterator
// let greet = () => {
//   let iter = people[Symbol.iterator]();
//   console.log(iter.next());
//   console.log(iter.next());
// };
// greet();
// // Generator
// function* generatorFunction() {
//   console.log("hello from 1st console statement");
//   yield 200;
//   console.log("hello from 2nd one");
//   yield 300;
// }
// const generatorObject = generatorFunction();
// console.log(generatorObject.next());
// console.log(generatorObject.next());
