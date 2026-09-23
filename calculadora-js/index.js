/**
 * Pregunta por un número y se asegura que el usuario dé un número.
 *
 * @param {string} message - El mensaje a mostrar.
 * @returns {number} El número ingresado por el usuario.
 */
function askNumber(message) {
  let number;
  do {
    number = Number(prompt(message));
  } while (Number.isNaN(number));
  return number
}

/**
 * Suma dos números y los muestra en consola.
 *
 * @param {number} a - Primer número.
 * @param {number} b - Segundo número.
 */
function add(a, b) {
  console.log(a + ' + ' + b + ' = ' + (a + b));
}

/**
 * Resta dos números y los muestra en consola.
 *
 * @param {number} a - Primer número.
 * @param {number} b - Segundo número.
 */
function subtract(a, b) {
  console.log(a + ' - ' + b + ' = ' + (a - b));
}

/**
 * Multiplica dos números y los muestra en consola.
 *
 * @param {number} a - Primer número.
 * @param {number} b - Segundo número.
 */
function multiply(a, b) {
  console.log(a + ' * ' + b + ' = ' + (a * b));
}

/**
 * Divide dos números y los muestra en consola.
 *
 * @param {number} a - Primer número.
 * @param {number} b - Segundo número.
 */
function divide(a, b) {
  console.log(a + ' / ' + b + ' = ' + (a / b));
}

/** Lista de las operaciones a realizar */
const operations = [add, subtract, multiply, divide]


/*** Programa principal ***/
console.log("Laboratorio iniciado");

let nombre = prompt("¿Cómo te llamas?");
console.log("Hola " + nombre + ". Ahora, ¡a operar!");

let numero1 = askNumber('Escribe el primer número');
let numero2 = askNumber('Escribe el segundo número');
for(let operation of operations) operation(numero1, numero2);
