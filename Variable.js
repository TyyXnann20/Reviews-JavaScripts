// Declare var , let

var x = 200;
var name = "Sophy";
function declareVarible() {
  let fName = "Sochea";
  //   var sName = "SreyMich";
  console.log(x);
  console.log(fName);
}

// Declare variable with const
name = 1299;
console.log(fName);
var num1 = 2000;
console.log("Before: ", num1);
num1 = "Name: Mich";
console.log("After: ", num1);
const name = "Sophy";
console.log("Name: ", name);
name = "SokNeak";
console.log("Name: ", name);
name = "SokNeak";

// Arithmetic Operator
let num1 = 1200;
let num2 = 300;
console.log("Addition:", num1 + num2);
console.log("Subtraction: ", num1 - num2);
console.log("Multiplication: ", num1 * num2);
console.log("Division: ", num1 / num2);
console.log("Modulus: ", num1 % num2);
num1++; // = num1 + 1
console.log("Num1:", num1);
num2--; // = num2 - 1
console.log("Num2:", num2);

// 1. if statement

let a = 1200;
let b = 600;
if (a < b) {
  // block statement
  console.log("a is greather than b");
}
// 2. if else
if (a < b) {
  console.log("a is greather than b");
} else {
  console.log("b is greather than a");
}

// 3. if else else if
var score = 80;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else if (score >= 50) {
  console.log("Grade: E");
} else {
  console.log("Grade: F");
}
