const prompt = require('prompt-sync')({ sigint: true });

function Mail(subj, msg) {
  this.subject = subj
  this.message = msg
}

// Type your code below this line!
function askString(message) {
  return prompt(`${message}: `);
}

let subject = askString('Ingrese su nombre');
let message = askString('¿Cuál es su asunto?');

const newMail = new Mail(subject, message)

// Type your code above this line!

console.log(newMail.subject + ": " + newMail.message);
