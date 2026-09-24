

// Type your code below this line!

function Car(brand, model, year, color, doors, km, motor) {
  this.brand = brand; //str
  this.model = model; //str
  this.year = year;   //number
  this.color = color; //str
  this.doors = doors; //number
  this.km = km;       //number
  this.motor = motor; //boolean

  this.printCar = function() {
    console.log(`Marca: ${brand}\tModelo: ${model}\tAño: ${year}\tColor: ${color}\tPuertas: ${doors}\tKilometraje: ${km}\tEs ${(motor)? 'a combustión': 'eléctrico'}.`);
  };
};

const miCoche = new Car('Toyota', 'Corolla', 2020, 'Blanco', 4, 45000, true);
miCoche.printCar();

// Type your code above this line!
