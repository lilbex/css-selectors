// to test synchronous and asynchronous functions

// synchronous function
// console.log(" I  eat  Ice Cream ");
// console.log(" and go to sleep ");

// synchronous function
function eatIceCream0() {
  console.log(" I  eat  Ice Cream ");
  console.log(" and go to sleep ");
}

// asynchronous function
function eatIceCream1() {
  setTimeout(function () {
    console.log(" I  eat  Ice Cream ");
  }, 2000);
  console.log(" and go to sleep "); // this will be printed first
}

// asynchronous function2
function eatIceCream2() {
  setTimeout(function () {
    console.log(" I  eat  Ice Cream ");
    setTimeout(function () {
      console.log(" and go to sleep ");
    }, 2000);
  }, 2000);
}

console.log(eatIceCream2());
