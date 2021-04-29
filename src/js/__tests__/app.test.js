import sortByHp from '../app';
import players from '../players';

test('should correctly sort', () => {
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  expect(expected).toEqual(sortByHp(players));
});

test('toBe test', () => {
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  expect(JSON.stringify(expected)).toBe(JSON.stringify(sortByHp(players)));
});
