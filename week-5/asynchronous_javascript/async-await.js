// This is supposed to be the better way to write promises and it helps us keep our code simple and clean.
// All you have to do is write the word async before any regular function and it becomes a promise.
// Let's see how we can use async-await to make our code simpler and cleaner.
// First, we'll create a function that returns a promise. We'll call it order. It will take two arguments: time and work. It will return a promise that will resolve after the time we pass as an argument. Inside the promise, we'll call the work function that we pass as an argument.
// Now, we'll call the order function and pass a time and a function as arguments. The function will log a message to the console.
// Now, let's create another function called production. It will also return a promise. Inside the promise, we'll log a message to the console.
// Now, we'll call the order function and pass a time and a function as arguments. The function will log a message to the console.
// Now, let's create another function called production. It will also return a promise. Inside the promise, we'll log a message to the console.
// Now, we'll call the order function and pass a time and a function as arguments. The function will log a message to the console.

let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

function promise() {
  return new Promise((resolve, reject) => {
    // Write code here
  });
}

// Now using async/await, we write one like this:

async function asyncFunction() {
  // Write code here
}

function toppings_choice() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("which topping would you love?"));
    }, 3000);
  });
}

async function kitchen0() {
  console.log("A");
  console.log("B");
  console.log("C");

  await toppings_choice();

  console.log("D");
  console.log("E");
}

// kitchen0();
// console.log("doing the dishes");
// console.log("cleaning the tables");
// console.log("taking orders");


// continuing our cake production
let is_shop_open = true;

function time(ms){
  return new Promise((resolve, reject) => {
    if(is_shop_open){
      setTimeout(resolve, ms);
    } else {
      reject(console.log("shop is closed"));
    }
  });
}

const kitchen1 = async() => {
  try {
    await time(2000);
    console.log(`${stocks.Fruits[0]} was selected`);

    await time(0000);
    console.log("production has started");

    await time(2000);
    console.log("fruit has been chopped");

    await time(1000);
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`);

    await time(1000);
    console.log("start the machine");

    await time(2000);
    console.log(`ice cream placed on ${stocks.holder[1]}`);

    await time(3000);
    console.log(`${stocks.toppings[0]} as toppings`);

    await time(2000);
    console.log("Serve Ice Cream");
  } catch (error) {
    console.log(error);
  }
}

console.log(kitchen1());
