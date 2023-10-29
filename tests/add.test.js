import Sut from '../src/add';

describe('Test Suite for Adding Function', () => {
  test('Adding 1 and 1 should equal 2', () => {
    expect(Sut(1, 1)).toBe(2);
  });

  test('Adding undefined and undefined should equal false', () => {
    expect(Sut(undefined, undefined)).toBe(false);
  });

  test('Adding null and null should equal false', () => {
    expect(Sut(null, null)).toBe(false);
  });

  test('Adding 0 and 1 should equal 1', () => {
    expect(Sut(0, 1)).toBe(1);
  });
});
