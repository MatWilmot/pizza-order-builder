const inquirer = require("inquirer");
let order;
let Pizza;

// Let's decide what sizes of pizza we offer
const sizesArray = ["10 inch", "12 inch", "14 inch", "16 inch"];
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
        exit();
      } else {
        clearOrder();
        getName();
      }
    });
};
