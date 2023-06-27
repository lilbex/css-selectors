const obj = {
  firstName: "Billy",
  lastName: "Bob",
  age: 25,
};
// accessing object properties
// dot notation
// console.log(obj.firstName)
// bracket notation
// console.log(obj['firstName'])

// adding properties to an object
obj.middleName = "Joe";
obj["cars"] = ["Ford", "Chevy", "Honda"];

// deleting properties from an object
delete obj.middleName;
// console.log(obj)

// looping through an object

obj["firstName"];

for (let key in obj) {
  // console.log(key)
  // console.log(obj[key])
}

// get only the keys
console.log(Object.keys(obj));

const students = [
  {
    firstName: "Billy",
    lastName: "Bob",
    age: 25,
  },
  {
    firstName: "Sally",
    lastName: "Sue",
    age: 30,
  },
];
// map through the students array and
// return a new array of just the first names
const firstNames = students.map((s) => s.firstName);
console.log(firstNames);

// Given an array of numbers and strings
// return a number which is a sum of all the numbers in
// the array.  If there are no numbers, return 0

const arr = [1, 2, 3, "4", "5", 1, "men", "8", "9", 4];
function addNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      sum += arr[i];
    }
  }
  return sum;
}
// using for in loop
function addNumbers2(arr) {
  let sum = 0;
  for (let i in arr) {
    if (typeof arr[i] === "number") {
      sum += arr[i];
    }
  }
  return sum;
}

// Assignment 1
const sumOfMultiples = (num) => {
  let sum = 0;
  for (let i = 0; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}
// Assignment 2
const sumOfTwoSmallestNums = (arr) => {
  let sorted = arr.sort((a, b) => a - b);
  return sorted[0] + sorted[1];
}
// Assignment 3
const letters = "abcdefghijklmnopqrstuvwxyz";
const alphabetPosition = (text) => {
  let result = [];
  for (let i = 0; i < text.length; i++) {
    let letter = text[i].toLowerCase();
    if (letters.includes(letter)) {
      result.push(letters.indexOf(letter) + 1);
    }
  }
  return result.join(" ");
}