const prompt = require('prompt-sync')({ sigint: true });

// Type your code below this line!

function Journey(start, end) {
  this.start = start;
  this.end = end;
}

function askString(message) {
  return prompt(`${message}: `);
}

let from = askString('¿De dónde viene?');
let to = askString('¿A dónde va?');

// Type your code above this line!

const travel = new Journey(from, to);

console.log("Booking a taxi from " + travel.start + " to " + travel.end + ".");
