function sequentialPromise(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`Expected arr to be an Array`);
  }
  if (arr.length === 0) {
    return Promise.resolve([]);
  }
  const onlyPromiseFns = arr.map((element) => {
    if (typeof element === 'function') {
      return element;
    }
    return () => Promise.resolve(element);
  });
  const results = [];
  const finalPromise = onlyPromiseFns.reduce((acc, currentPromiseFn) => {
    return acc.then((value) => {
      results.push(value);
      return currentPromiseFn(value);
    });
  }, Promise.resolve());
  return finalPromise
    .then((value) => {
      results.push(value);
    })
    .then(() => {
      return results.slice(1);
    });
}
export { sequentialPromise };

// function sequentialPromise(array) {
//   let result = Promise.resolve();
//   for (let i = 0; i < array.length; i += 1) {
//     result = result.then(array[i]);
//   }
//   return result;
// }
// /* function sequentialPromise(array) {
//   let result = Promise.resolve();
//   array.forEach(arr => {
//     result = result.then(() => arr());
//   });
//   return result;
// } */
  
// export { sequentialPromise };
 