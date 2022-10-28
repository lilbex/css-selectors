// generators help us create iterators
import fetch from 'node-fetch';
import co from 'co';
// generators are functions that can be exited and later re-entered. 
// Their context (variable bindings) will be saved across re-entrances.

function* idMaker() {
  var index = 0;
  while (index < 3)
    yield index++;
}

var gen = idMaker();

function* simpleGenerator() {
  yield 1;
  yield 2;
  yield 3;
}
var simpleGen = simpleGenerator();
var simpleGen2 = simpleGenerator();
// console.log(simpleGen.next()); // { value: 1, done: false }

// generators that take arguments
function* generatorWithArgs(arg1, arg2) {
  yield arg1;
  yield arg2;
}

var genWithArgs = generatorWithArgs("hello", "world");
// console.log(genWithArgs.next()); // { value: "hello", done: false }

// generators that take arrays

function* generatorWithArray(arr) {
  for (var i = 0; i < arr.length; i++) {
    yield arr[i];
  }
}

var genWithArray = generatorWithArray([1, 2, 3, 4, 5]);
// console.log(genWithArray.next()); // { value: 1, done: false }

// generators that take objects

function* generatorWithObject(obj) {
  for (var key in obj) {
    yield obj[key];
  }
}

var genWithObject = generatorWithObject({ a: 1, b: 2, c: 3 });
// console.log(genWithObject.next()); // { value: 1, done: false }

// generators that take maps

function* generatorWithMap(map) {
  for (var [key, value] of map) {
    yield value;
  }
}

var genWithMap = generatorWithMap(new Map([["a", 1], ["b", 2], ["c", 3]]));
console.log(genWithMap.next()); // { value: 1, done: false }

// generators that take sets

function* generatorWithSet(set) {
  for (var value of set) {
    yield value;
  }
}

var genWithSet = generatorWithSet(new Set([1, 2, 3]));
// console.log(genWithSet.next()); // { value: 1, done: false }

// other methods on generators

// return() - returns the given value and finishes the generator
// throw() - throws an error
// next() - returns the next value

function* createSquaredNumber(){
  var num = 1;
  while(true){
    yield num * num;
    num++;
  }
}

// var squaredNumber = createSquaredNumber();
// console.log(squaredNumber.next()); // { value: 1, done: false }
// console.log(squaredNumber.next()); // { value: 4, done: false }
// console.log(squaredNumber.next()); // { value: 9, done: false }

for(var num of createSquaredNumber()){
  if(num > 100) break;
  console.log(num);
}

// use generators to fetch data from an API using jsonplaceholder.typicode.com

// npm init -y
co(function * (){
    var posts = yield fetch('https://jsonplaceholder.typicode.com/posts/1');
    var json = yield posts.json();
    console.log(json);
  })




