# Instructions

You have to write a function `sequentialPromise` that evaluates promises in a sequential manner. This function is opposite in nature to [`Promise.all`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all). If you are not familiar with `Promise.all`, it's best to familiarize yourself with `Promise.all` before proceeding ahead.

**Working**
If there are 3 promises, A, B, C, then

- A will start executing as soon as possible.
- Then B will be executed **only** when A finishes.
- Then, C will be executed **only** when B finishes.
- Since there are no more promises, we resolve.

Like `Promise.all`, `sequentialPromise` should give an array of all resolved values or fail with the first promise that fails.

Also, `sequentialPromise` accepts an array of whatever values you want.

## Parameters

- An array _(you can choose what the array will contain, e.g. functions, promises etc.)_

## Return

- A Promise which resolves when all the given promises have been **sequentially** resolved.

## Examples

**Example 1**

```js
const items = [...] // you can decide whatever the element can be

sequentialPromise(items)
.then(res => {
  // res should be an array containing all the values of each resolved promise (just like Promise.all).
})
.catch(err => {
  // the rejection error of the first rejected promise
})
```

**Example 2**
Assume there are two `fetch` requests. The first one takes 3 seconds. The second one takes 5 seconds to return the response. Then,
the `sequentialPromise(requestsArray)` will produce a promise which will resolve after 3 + 5 = 8 seconds.

## Restrictions

- You can't use `async` / `await` syntax.
