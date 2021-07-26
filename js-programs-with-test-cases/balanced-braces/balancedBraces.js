function balancedBraces(args) {
  const openBraces = ["(", "[", "{"];
  const closeBraces = [")", "]", "}"];
  const stack = [];
  for (let i = 0; i < args.length; i += 1) {
    const character = args[i];

    if (openBraces.includes(character)) {
      stack.push(character);
    }
    if (closeBraces.includes(character)) {
      const lastBrace = stack.pop();

      if (openBraces.indexOf(lastBrace) !== closeBraces.indexOf(character))
        return false;
    }
  }

  return stack.length === 0;
}

export { balancedBraces };
