const readline = require('node:readline/promises');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function askNumber(message) {
  let number;
  do {
    const input = await rl.question(`${message}: `);
    number = Number(input);
    if (Number.isNaN(number)) {
      console.log('Por favor, escribe un número válido.');
    }
  } while(Number.isNaN(number));

  return number;
}

(async () => {
  console.log('Se le pedirá un rango de números :D \n');
  let number1 = await askNumber('Escribe el primer número');
  let number2 = await askNumber('Escribe el segundo número');
  if(number1 > number2) {
    let temp = number1;
    number1 = number2;
    number2 = temp;
  }

  console.log(`\nEl rango de números es [${number1},${number2}]`);
  for(let i = number1; i <= number2; i++) {
    let string = '';

    if (i % 3 === 0) string += 'Fizz';
    if (i % 5 === 0) string += 'Buzz';
    if (i % 7 === 0) string += 'Woof';

    console.log(string || i);
  }

  rl.close();
})();
