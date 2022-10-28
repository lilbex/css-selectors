// to solve callback hell, we use promises
// a promise has three states:

// Pending: This is the initial stage. Nothing happens here. Think of it like this, your customer is taking their time giving you an order. But they haven't ordered anything yet.
// Resolved: This means that your customer has received their food and is happy.
// Rejected: This means that your customer didn't receive their order and left the restaurant.
// Let's adopt promises to our ice cream production case study.

let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;
let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("Our shop is closed"));
    }
  });
};

// Set 👇 time here
order(2000, () => console.log(`${stocks.Fruits[0]} was selected`));
//    pass a ☝️ function here to start working

// Promise chaining
// Let me make it simpler: it's similar to giving instructions to someone. You tell someone to " First do this, then do that, then this other thing, then.., then.., then..." and so on.

// The first task is our original promise.
// The rest of the tasks return our promise once one small bit of work is completed
// Let's implement this on our project. At the bottom of your code write the following lines. 👇

// Note: don't forget to write the return word inside your .then handler. Otherwise, it won't work properly. If you're curious, try removing the return once we finish the steps:

// step 1
order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
  // step 2
  .then(() => {
    return order(0000, () => console.log("production has started"));
  })

  // step 3
  .then(() => {
    return order(2000, () => console.log("Fruit has been chopped"));
  })

  // step 4
  .then(() => {
    return order(1000, () =>
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)
    );
  })

  // step 5
  .then(() => {
    return order(1000, () => console.log("start the machine"));
  })

  // step 6
  .then(() => {
    return order(2000, () =>
      console.log(`ice cream placed on ${stocks.holder[1]}`)
    );
  })

  // step 7
  .then(() => {
    return order(3000, () => console.log(`${stocks.toppings[0]} as toppings`));
  })

  // Step 8
  .then(() => {
    return order(2000, () => console.log("Serve Ice Cream"));
  })
  // Error handling
  .catch(() => {
    console.log("Customer left");
  })

  // Finally
  .finally(() => {
    console.log("day ended, shop is closed");
  });

