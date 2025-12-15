const gameOfLife = require('./game');

test('test setup works', () => {
  expect(gameOfLife()).toBe('ok');
});

test('math works', () => {
    expect(1 + 1).toBe(2);
});