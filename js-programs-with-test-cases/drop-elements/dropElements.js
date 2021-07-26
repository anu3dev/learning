function dropElements(elements, predicate) {
  if (!Array.isArray(elements)) {
    return 'Seems passed array is invalid array.';
  }
  if (typeof predicate !== 'function') {
    return 'Seems passed predicate is invalid function.';
  }
  const filteredElements = elements.filter(predicate);
  return filteredElements;
}

export { dropElements };
