import getRandomInt from '../app';

test('randomInt', () => {
  const randomInt = getRandomInt();
  expect(typeof randomInt).toBe('number');
});
