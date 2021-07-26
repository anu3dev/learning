// const { performance } = require('perf_hooks');
// import { sequentialPromise } from './sequentialPromise';
// jest.setTimeout(10000);
// describe('sequentialPromise', () => {
//   describe('type checks', () => {
//     test('should throw an error when an array is not passed', () => {
//       expect(() => sequentialPromise({})).toThrow(/[a-zA-Z0-9]+/);
//       expect(() => sequentialPromise()).toThrow();
//       expect(() => sequentialPromise([])).not.toThrow();
//     });
//     test('return value should be an instance of a promise in all cases', () => {
//       expect(sequentialPromise([]) instanceof Promise).toBe(true);
//     });
//   });
//   describe('correct working', () => {
//     test('should resolve promises in a sequence', async () => {
//       const wait = (ms) => new Promise((res) => setTimeout(() => res, ms));
//       /**
//        * If you don't wrap your promises in a function,
//        * all the promises would start at the moment of initialization
//        * because of eager evaluation.
//        * And your code will behave like Promise.all
//        */
//       const promiseFunctions = [
//         () => wait(1000),
//         () => wait(2000),
//         () => wait(1000),
//       ];
//       // performance.now returns the current high resolution millisecond timestamp
//       const timeBeforeStarting = performance.now();
//       await sequentialPromise(promiseFunctions);
//       const timeAfterEnding = performance.now();
//       expect(timeAfterEnding - timeBeforeStarting).toBeGreaterThanOrEqual(4000);
//     });
//     test('should resolve with correct values and maintain chaining', async () => {
//       const p1 = () =>
//         new Promise((resolve) => {
//           setTimeout(() => {
//             resolve('dude');
//           }, 1000);
//         });
//       const p2 = (dude) =>
//         new Promise((resolve) => {
//           setTimeout(() => {
//             resolve(`${dude}, wheres my car`);
//           }, 300);
//         });
//       const p3 = (movieName) =>
//         new Promise((resolve) => {
//           setTimeout(() => {
//             resolve(`${movieName} is a terrible movie`);
//           }, 0);
//         });
//       const resultsArray = await sequentialPromise([p1, p2, p3]);
//       expect(resultsArray).toEqual([
//         'dude',
//         'dude, wheres my car',
//         'dude, wheres my car is a terrible movie',
//       ]);
//     });
//     test('should resolve with [] when argument is []', async () => {
//       const res = await sequentialPromise([]);
//       expect(res).toEqual([]);
//     });
//   });
//   describe('when the all the elements are not promise-returning functions', () => {
//     test('should wrap them in a promise (like Promise.all)', async () => {
//       const fns = [() => Promise.resolve(1), 2, () => Promise.resolve(3)];
//       const res = await sequentialPromise(fns);
//       expect(res).toEqual([1, 2, 3]);
//     });
//   });
//   describe('when one of the promises reject', () => {
//     test('should reject with that promise', async () => {
//       const error = new Error('rejected promise');
//       const promiseFn = [
//         () => Promise.resolve(23),
//         () => Promise.reject(error),
//       ];
//       let res;
//       try {
//         res = await sequentialPromise(promiseFn);
//       } catch (err) {
//         res = err;
//       }
//       expect(res).toBe(error);
//     });
//     test('should not execute remaining promises when the one is rejected', async () => {
//       /**
//        * Given A, B C as three promises, if A is rejected, the return value from
//        * sequentialPromise is rejected with the error. Hence, we don't need to
//        * execute B, and C.
//        * In this case, since second is rejected, we don't execute the third.
//        */
//       const truthTable = [false, false, false];
//       const promiseFn = [
//         () =>
//           new Promise((res, rej) => {
//             truthTable[0] = true;
//             res();
//           }),
//         () =>
//           new Promise((res, rej) => {
//             truthTable[1] = true;
//             rej(42);
//           }),
//         () =>
//           new Promise((res, rej) => {
//             truthTable[2] = true;
//             res();
//           }),
//       ];
//       try {
//         await sequentialPromise(promiseFn);
//         // The below shouldn't be executed since
//         // a rejected promise will throw an exception.
//         // If jest is executing the below line, your implementation is wrong.
//         expect(false).toBe(true);
//       } catch (e) {
//         expect(e).toBe(42);
//       }
//       expect(truthTable).toEqual([true, true, false]);
//     });
//   });
// });

const { performance } = require('perf_hooks');
import { sequentialPromise } from './sequentialPromise';
describe('sequentialPromise', () => {
  describe('type checks', () => {
    test('should throw an error when an array is not passed', () => {
      expect(() => sequentialPromise({})).toThrow(/[a-zA-Z0-9]+/);
      expect(() => sequentialPromise()).toThrow();
      expect(() => sequentialPromise([])).not.toThrow();
    });
    test('return value should be an instance of a promise in all cases', () => {
      expect(sequentialPromise([]) instanceof Promise).toBe(true);
    });
  });
  describe('correct working', () => {
    test('should resolve promises in a sequence', async () => {
      const wait = (ms) => new Promise((res) => setTimeout(res, ms));
      /**
       * If you don't wrap your promises in a function,
       * all the promises would start at the moment of initialization
       * because of eager evaluation.
       * And your code will behave like Promise.all
       */
      const promiseFunctions = [
        () => wait(1000),
        () => wait(2000),
        () => wait(1000),
      ];
      // performance.now returns the current high resolution millisecond timestamp
      const timeBeforeStarting = performance.now();
      await sequentialPromise(promiseFunctions);
      const timeAfterEnding = performance.now();
      expect(timeAfterEnding - timeBeforeStarting).toBeGreaterThanOrEqual(4000);
    });
    test('should resolve with correct values and maintain chaining', async () => {
      const p1 = () =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve('dude');
          }, 1000);
        });
      const p2 = (dude) =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve(`${dude}, wheres my car`);
          }, 300);
        });
      const p3 = (movieName) =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve(`${movieName} is a terrible movie`);
          }, 0);
        });
      const resultsArray = await sequentialPromise([p1, p2, p3]);
      expect(resultsArray).toEqual([
        'dude',
        'dude, wheres my car',
        'dude, wheres my car is a terrible movie',
      ]);
    });
    test('should resolve with [] when argument is []', async () => {
      const res = await sequentialPromise([]);
      expect(res).toEqual([]);
    });
  });
  describe('when the all the elements are not promise-returning functions', () => {
    test('should wrap them in a promise (like Promise.all)', async () => {
      const fns = [() => Promise.resolve(1), 2, () => Promise.resolve(3)];
      const res = await sequentialPromise(fns);
      expect(res).toEqual([1, 2, 3]);
    });
  });
  describe('when one of the promises reject', () => {
    test('should reject with that promise', async () => {
      const error = new Error('rejected promise');
      const promiseFn = [
        () => Promise.resolve(23),
        () => Promise.reject(error),
      ];
      let res;
      try {
        res = await sequentialPromise(promiseFn);
      } catch (err) {
        res = err;
      }
      expect(res).toBe(error);
    });
    test('should not execute remaining promises when the one is rejected', async () => {
      /**
       * Given A, B C as three promises, if A is rejected, the return value from
       * sequentialPromise is rejected with the error. Hence, we don't need to
       * execute B, and C.
       * In this case, since second is rejected, we don't execute the third.
       */
      const truthTable = [false, false, false];
      const promiseFn = [
        () =>
          new Promise((res, rej) => {
            truthTable[0] = true;
            res();
          }),
        () =>
          new Promise((res, rej) => {
            truthTable[1] = true;
            rej(42);
          }),
        () =>
          new Promise((res, rej) => {
            truthTable[2] = true;
            res();
          }),
      ];
      try {
        await sequentialPromise(promiseFn);
        // The below shouldn't be executed since
        // a rejected promise will throw an exception.
        // If jest is executing the below line, your implementation is wrong.
        expect(false).toBe(true);
      } catch (e) {
        expect(e).toBe(42);
      }
      expect(truthTable).toEqual([true, true, false]);
    });
  });
});