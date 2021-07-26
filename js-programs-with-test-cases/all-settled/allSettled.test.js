import { allSettled } from './allSettled';

describe('allSettled', () => {
  test('Test 2', () => {
    const promise1 = Promise.resolve(3);
    const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
    const promises = [promise1, promise2];
    return expect(allSettled(promises)).resolves.toEqual([
      { status: 'fulfilled', value: 3 },
      { status: 'rejected', reason: 'foo' },
    ]);
  });
});
