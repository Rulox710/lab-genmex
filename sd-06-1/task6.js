const prompt = require('prompt-sync')({ sigint: true });

// Type your code below this line!
function ShoppingList() {

  function Object(name, amount) {
    this.name = name;
    this.amount = amount;
  };

  this.objectList = [];

  this.addObject = function(name, amount) {
    this.objectList.push(new Object(name, amount));
  };

  this.printList = function() {
    console.log(this.objectList);
  };
};

const SHOPPING_LIST = new ShoppingList();

SHOPPING_LIST.addObject('Leche', 2);
SHOPPING_LIST.addObject('Huevos', 12);
SHOPPING_LIST.addObject('Pan', 1);

SHOPPING_LIST.printList();


// Type your code above this line!
