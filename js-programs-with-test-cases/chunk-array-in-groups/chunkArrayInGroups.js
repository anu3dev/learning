function chunkArrayInGroups(array, chunkSize) {
  if (!Array.isArray(array)) {
    return 'Seems passed array is invalid array.';
  }
  if (typeof chunkSize !== 'number') {
    return 'Seems passed chunkSize is invalid function.';
  }
  if (chunkSize === 0) {
    return array;
  }
  const matrix = Array(Math.ceil(array.length / chunkSize))
    .fill().map(() => array.splice(0, chunkSize));
  return matrix;
}

export {
  chunkArrayInGroups,
};
