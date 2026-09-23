// Refer to Task 7 in your Instructions to complete this task

const buzzWords = [
    "Fizz",
    "Buzz",
    "Woof",
    "Bark",
    "Awoo",
    "Bang",
    "Uwu",
    "Awa"
  ];

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
    if(Number.isNaN(number) || number < 0) {
      console.log('Por favor, escribe un número válido y no negativo.');
    }
  } while(Number.isNaN(number) || number < 0);

  return number;
}

function isPrime(number, primeList) {
  if(number < 2) return false;
  const max = Math.floor(Math.sqrt(number));
  for(const prime of primeList) {
    if(number % prime === 0) return false;
  }
  return true;
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

  const NUMBER_ARRAY = [];
  const PRIME_LIST = [2];
  let buzzCounter = 0;
  console.log(`\nEl rango de números es [${number1},${number2}]`);
  for(let i = number1; i <= number2; i++) {
    let string = '';

    if(isPrime(i, PRIME_LIST)) {
      PRIME_LIST.push(i);
      string += buzzWords[buzzCounter++];
      if(buzzCounter % buzzWords.length === 0) {
        buzzCounter = 0;
      }
    } else {
      for(const prime of PRIME_LIST) {
        if(i % prime === 0 && prime < i) {
          let index = PRIME_LIST.indexOf(prime);
          string += buzzWords[index % buzzWords.length];
        }
      }
    }

    console.log(string || i);
    NUMBER_ARRAY.push(i);
  }

  console.log(PRIME_LIST);
  rl.close();
})();
