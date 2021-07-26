function abbreviateString(args) {
  const cleanedArgs = args.split(' ');
  return `${cleanedArgs[0]} ${cleanedArgs[cleanedArgs.length - 1].charAt(0)}.`;
}
export { abbreviateString };
