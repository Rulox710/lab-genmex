const prompt = require('prompt-sync')({ sigint: true });

function Mail(subj, msg) {
  this.subject = subj;
  this.message = msg;

  this.printMail = function() {
    return console.log(this.subject + ': ' + this.message);
  };
}

// Type your code below this line!
function askString(message) {
  return prompt(`${message}: `);
}

let subject;
let message;
if (process.argv.length >= 5) {
  // Ejecución con parámetros (pytest, por ejemplo)
  subject = process.argv[3];
  message = process.argv[4];
} else {
  // Ejecución manual
  subject = prompt('Ingrese su nombre: ');
  message = prompt('¿Cuál es su asunto?: ');
}

const newMail = new Mail(subject, message);

// Type your code above this line!

newMail.printMail()
