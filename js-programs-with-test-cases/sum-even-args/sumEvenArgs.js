function sumEvenArgs(...args) {
  const evenArgs = args.filter((num) => num % 2 === 0);
  const sumOfEvenArgs = evenArgs.reduce((a, b) => a + b, 0);
  return sumOfEvenArgs;
}

export { sumEvenArgs };
