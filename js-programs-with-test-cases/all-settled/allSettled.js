function allSettled(args) {
  const results = Array(args.length);
  if ((arguments.length === 0 || args === null)) {
    throw new Error(`${typeof promises} is not iterable`);
  }
  return new Promise(resolve => {
    args.forEach((promise, index) => Promise.resolve(promise)
      .then(result => {
        results[index] = { status: 'fulfilled', value: result };
        if ((index + 1) === args.length) {
          resolve(results);
        }
      })
      .catch(err => {
        results[index] = { status: 'rejected', reason: err };
        if ((index + 1) === args.length) {
          resolve(results);
        }
      }));
  });
}

export { allSettled };

// const allSettled = args => new Promise((resolve) => {
//   const results = [];
//   let executedPromisesCount = 0;
//   args.forEach((promise, index) => {
//     Promise.resolve(promise).then(result => {
//       results[index] = { status: 'fulfilled', value: result };
//       executedPromisesCount += 1;
//       if (executedPromisesCount === args.length) {
//         resolve(results);
//       }
//     })
//       .catch(err => {
//         results[index] = { status: 'rejected', value: err };
//         executedPromisesCount += 1;
//         if (executedPromisesCount === args.length) {
//           resolve(results);
//         }
//       });
//   });
// });
// export { allSettled };
