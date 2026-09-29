const arr = []

// Escriba su código debajo de esta línea

/* tarea 1 */
for(let i = 1; i < 21; i++) arr.push(i);
console.log(arr);

/* tarea 2 */
arr.reverse();
console.log(arr);

/* tarea 3 */
arr.splice(5, 0, 5);
console.log(arr);

/* tarea 4 */
arr.splice(5, 1);
console.log(arr);

/* tarea 5 */
console.log(arr.join(','));

/* tarea 6 */
const arr1 = [];
const arr2 = [];
for(let i = 1; i < 21; i++) {
  let currentArr = (i % 2 === 0)? arr1: arr2;
  currentArr.push(i);
}
console.log(arr1.concat(arr2).sort((a, b) => a - b));

/* tarea 7 */
const matrix = [[]]
matrix.push(0);
console.log(matrix);
matrix.push([1,2,3]);
matrix.push([4,3,5,6]);
console.log(matrix);
matrix[3].splice(1,1);
console.log(matrix);
matrix[2].reverse();
console.log(matrix);

// Escriba su código por encima de esta línea

arr.forEach(element => console.log(element))
