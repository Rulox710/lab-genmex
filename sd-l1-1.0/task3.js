// Refer to Task 3 in your Instructions to complete this task

for(let i = 1; i < 106; i++) {
  let string = i
  if(i % 15 === 0) { //MCM(3,5)
    string = 'FizzBuzz';
  } else if(i % 5 === 0) {
    string = 'Buzz';
  } else if(i % 3 === 0) {
    string = 'Fizz';
  }
  console.log(string)
}
