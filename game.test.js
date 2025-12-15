const gameOfLife = require('./game');

test('test setup works', () => {
  expect(gameOfLife()).toBe('ok');
});

test('should fail', () => {
    expect(1 + 1).toBe(5); //помилка
});