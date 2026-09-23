// Refer to Task 4 in your Instructions to complete this task

for(let i = 1; i < 106; i++) {
  let string = ''

  if(i % 3 === 0) string += 'Fizz';
  if(i % 5 === 0) string += 'Buzz';
  if(i % 7 === 0) string += 'Woof';

  console.log((string.length > 0)? string: i);
}
