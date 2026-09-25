const prompt = require('prompt-sync')({ sigint: true });

// Type your code below this line!

function Journey(start, end) {
  this.start = start;
  this.end = end;
}

function askString(message) {
  return prompt(`${message}: `);
}

let from;
let to;
if (process.argv.length >= 5) {
  // Ejecución con parámetros (pytest, por ejemplo)
  from = process.argv[3];
  to = process.argv[4];
} else {
  // Ejecución manual
  from = askString('¿De dónde viene?');
  to = askString('¿A dónde va?');
}

// Type your code above this line!

const travel = new Journey(from, to);

console.log("Booking a taxi from " + travel.start + " to " + travel.end + ".");
