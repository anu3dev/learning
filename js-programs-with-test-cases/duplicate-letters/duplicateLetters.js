function duplicateLetters(args) {
  const count = {};
  for (const char of args) {
    if (char in count) {
      count[char] += 1;
    } else {
      count[char] = 1;
    }
  }
  const maxCount = Math.max(...Object.values(count));
  if (maxCount >= 2) {
    return maxCount;
  }
  return false;
}

export { duplicateLetters };
