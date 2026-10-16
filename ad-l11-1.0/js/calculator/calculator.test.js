const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

test('División de 0 y 10 es 0', () => {
  expect(calculator.divide(0, 10)).toBe(0);
});

test('División de -5 y -10 es 0.5', () => {
  expect(calculator.divide(-5, -10)).toBe(0.5);
});

test('División de un número entre 0 devuelve Infinity', () => {
  expect(calculator.divide(10, 0)).toBe(Infinity);
});

test('Multiplicación de 0.5 por -10 es -5', () => {
  expect(calculator.multiply(0.5, -10)).toBe(-5);
});

test('Multiplicar un número por 0 devuelve 0', () => {
  expect(calculator.multiply(10, 0)).toBe(0);
});
