import { debounce } from './debounce';
jest.useFakeTimers();
describe('debounce', () => {
  let func;
  let debouncedFn;
  beforeEach(() => {
    func = jest.fn();
    // func = () => { console.log("test")}
    debouncedFn = debounce(func, 2000);
  });
  test('executes just once', () => {
    for (let i = 0; i < 100; i++) {
      debouncedFn();
    }
    jest.runAllTimers();
    expect(func).toBeCalledTimes(1);
  });
  test('not executed immediately', () => {
    debouncedFn();
    expect(func).toBeCalledTimes(0);
  });
  test('make one call after a delay', () => {
    debouncedFn();
    jest.runAllTimers();
    debouncedFn();
    expect(func).toBeCalledTimes(1);
  });
  test('cancel any scheduled function calls', () => {
    debouncedFn();
    debouncedFn.cancel();
    jest.runAllTimers();
    expect(func).toBeCalledTimes(0);
  });
});