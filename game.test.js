const gameOfLife = require('./game');

test('test setup works', () => {
  expect(gameOfLife()).toBe('ok');
});