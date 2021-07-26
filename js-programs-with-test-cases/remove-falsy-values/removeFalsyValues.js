function removeFalsyValues(args) {
  return args.filter(Boolean);
}

export { removeFalsyValues };
