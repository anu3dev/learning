function curry(args) {
  return function curriedSolution(...value1) {
    if (value1.length >= args.length) {
      return args.apply(this, value1);
    }
    return function applyCurry(...value2) {
      return curriedSolution.apply(this, value1.concat(value2));
    };
  };
}

export {
  curry,
};
