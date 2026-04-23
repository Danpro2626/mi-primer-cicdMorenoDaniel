const { sumar } = require('./app');

test('sumar 2 + 3 debe dar 5', () => {
  expect(sumar(2, 3)).toBe(5);
});

test('sumar 0 + 0 debe dar 0', () => {
  expect(sumar(0, 0)).toBe(0);
});