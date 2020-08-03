const inquirer = require("inquirer");
let order;
let Pizza;

// Let's decide what sizes of pizza we offer
const sizesArray = ["10 inch", "12 inch", "14 inch", "16 inch"];
// Let's decide what crust types we offer
const crustArray = ["Thin Crust", "Regular", "Pan", "Stuffed Crust"];
// Let's decide what sauces we offer
const saucesArray = ["Marinara", "BBQ", "Alfredo Sauce"];
// Let's decide what toppings we offer
const toppingsArray = [
  "Cheese",
  "Extra Cheese",
  "Ham",
  "Beef",
  "Pepperoni",
  "Chicken",
  "Bacon",
  "Jalapeños",
  "Onions",
  "Banana Peppers",
  "Olives",
  "Mushrooms",
  "Pineapple",
  "Green Peppers",
];

// Clear out the current order
const clearOrder = () => {
  // The order will contain Pizza objects
  order = [];
  // if we're clearing the order, we won't need the current pizza, either
  clearPizza();
};

// Clear out the current Pizza
const clearPizza = () => {
  // here we define an empty Pizza object
  Pizza = {
    name: "",
    size: "",
    crust: "",
    sauce: "",
    toppings: [],
  };
};

// startApp() will be how we begin the application
const startApp = () => {
  clearOrder();
  inquirer
    .prompt([
      {
        name: "start",
        type: "list",
        message: "What would you like to do?",
        choices: ["New Order", "Exit"],
      },
    ])
    .then((res) => {
      if (res.start === "Exit") {
        return;
      } else {
        clearOrder();
        getName();
      }
    });
};

const getName = () => {
  inquirer
    .prompt([
      {
        name: "customer_name",
        message: "Customer name:",
      },
    ])
    .then((res) => {
      Pizza.name = res.customer_name;
      console.log(Pizza);
      getSize();
    });
};

const getSize = () => {
  inquirer
    .prompt([
      {
        name: "pizza_size",
        type: "list",
        message: "Pizza size:",
        choices: sizesArray,
      },
    ])
    .then((res) => {
      Pizza.size = res.pizza_size;
      console.log(Pizza);
      getCrust();
    });
};

const getCrust = () => {
  inquirer
    .prompt([
      {
        name: "pizza_crust",
        type: "list",
        message: "Crust type:",
        choices: crustArray,
      },
    ])
    .then((res) => {
      Pizza.crust = res.pizza_crust;
      console.log(Pizza);
      getSauce();
    });
};

const getSauce = () => {
  inquirer
    .prompt([
      {
        name: "pizza_sauce",
        type: "list",
        message: "Sauce type:",
        choices: saucesArray,
      },
    ])
    .then((res) => {
      Pizza.sauce = res.pizza_sauce;
      console.log(Pizza);
      getToppings();
    });
};

const getToppings = () => {
  inquirer
    .prompt([
      {
        name: "pizza_toppings",
        type: "checkbox",
        message: "Choose toppings:",
        choices: toppingsArray,
      },
    ])
    .then((res) => {
      res.pizza_toppings.forEach((topping) => {
        Pizza.toppings.push(topping);
      });
      console.log("Pizza:", Pizza);
      order.push(Pizza);
      console.log("Order:", order);
      anotherPizza();
    });
};

const anotherPizza = () => {
  inquirer
    .prompt([
      {
        name: "another_pizza",
        type: "confirm",
        message: "Add another pizza?",
      },
    ])
    .then((res) => {
      if (res.another_pizza) {
        clearPizza();
        getName();
      } else {
        console.log("Your order:", order);
        startApp();
      }
    });
};

startApp();
