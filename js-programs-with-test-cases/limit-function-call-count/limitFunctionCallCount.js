const limitFunctionCallCount = (callback, noOfTimes) => {
  let counter = 0;
  return (...argsforCallback) => {
    if (counter < noOfTimes) {
      counter += 1;
      return callback(...argsforCallback);
    } return null;
  };
};

export {
  limitFunctionCallCount,
};
