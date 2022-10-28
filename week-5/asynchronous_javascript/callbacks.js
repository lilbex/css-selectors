// here is our stocks object
let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

// The entire business depends on what a customer orders. Once we have an order, we start production and then we serve ice cream. So, we'll create two functions ->

// order
// production

let order0 = (call_production) => {
  console.log("Order placed. Please call production");
  call_production();
};

let production0 = () => {
  console.log("Production has started");
};

// Now, we'll call the order function and pass production as an argument. This will call the production function.

// order0(production0);

// Now, let's select a fruit
// 1st Function

let order1 = (fruit_name, call_production) => {
  setTimeout(function () {
    console.log(`${stocks.Fruits[fruit_name]} was selected`);
    call_production();
  }, 2000);
};


// Let's complete our ice cream production by nesting a function inside another 
// function – this is also known as a callback, remember?
let production1 = () => {
  setTimeout(() => {
    console.log("production has started");
    setTimeout(() => {
      console.log("The fruit has been chopped");
      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`);
        setTimeout(() => {
          console.log("start the machine");
          setTimeout(() => {
            console.log(`Ice cream placed on ${stocks.holder[1]}`);
            setTimeout(() => {
              console.log(`${stocks.toppings[0]} as toppings`);
              setTimeout(() => {
                console.log("serve Ice cream");
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0000);
};

order1(0, production1);
