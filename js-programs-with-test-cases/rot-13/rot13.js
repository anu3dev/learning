function rot13(args) {
  let output = '';
  for (let i = 0; i < args.length; i += 1) {
    let char = args[i];
    const charCode = args.charCodeAt(i);
    if (charCode <= 91 && charCode >= 65) {
      char = String.fromCharCode(((charCode - 65 + 13) % 26) + 65);
    }
    output += char;
  }
  return output;
}

export { rot13 };
