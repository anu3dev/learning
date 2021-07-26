## Instructions

Implement a function which debounces other functions. Learn more [here](https://css-tricks.com/debouncing-throttling-explained-examples/)

Debouncing is a practice used to improve performance. There might be some functionality in a web page which requires time-consuming computations. If such a method is invoked frequently, it might greatly affect the performance of the browser, as JavaScript is a single threaded language. 

Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, that it stalls the performance of the web page. In other words, it limits the rate at which a function gets invoked.

Debouncing is a generic concept and can be used in non-web scenarios as well.

The returned function should also have `.cancel` method to cancel any scheduled function calls.

## Parameters
- A function which will be debounced
- debouncing time in milliseconds

## Returns
- A function 

## Examples
```js
let debouncedFn = debounce(() => console.log("hello"), 5000);
debouncedFn();
debouncedFn();
debouncedFn();
debouncedFn();
debouncedFn(); // Will run after ~5s and print "hello" only once
debouncedFn.cancel() // but it is cancelled before it could be executed.
```

## Restrictions
- Don't use any external libraries.
- Don't copy paste any code from any article / library.