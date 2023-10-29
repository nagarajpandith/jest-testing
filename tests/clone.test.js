import Sut from '../src/clone';

describe('Test Suite for Cloning Array', () => {
  test('Producing a clone of an array', () => {
    expect(Sut([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test('Producing a clone of an array', () => {
    expect(Sut([1, 2, 3])).not.toBe([1, 2, 3]);
  });
});
