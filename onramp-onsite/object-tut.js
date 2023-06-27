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
function addNumbers() {}
