function pathSatisfies(predicate, path, obj) {
  let currentValue = obj;
  for (let value of path) {
    currentValue = currentValue ? currentValue[value] : undefined;
  }
  if (currentValue === undefined) {
    return false;
  }
  return predicate(currentValue);
}
function validator(predicate, path, obj) {
  if (typeof predicate !== 'function') {
    throw new Error(
      `Expected predicate of type function. Received: ${typeof predicate}`
    );
  }
  if (!Array.isArray(path)) {
    throw new Error(`Expected path to be an Array. `);
  }
  const isSomeValuesNotStringsInPath = path.some(
    (value) => typeof value !== 'string'
  );
  if (isSomeValuesNotStringsInPath) {
    throw new Error(`Expected all values in path array to be of string type.`);
  }
  if (typeof obj !== 'object' && typeof obj !== 'function') {
    throw new Error(`Expected obj of type object. Received: ${typeof obj}`);
  }
}
function withValidation(fn, validator) {
  return function (...args) {
    validator(...args);
    return fn(...args);
  };
}
const pathSatisfiesWithValidator = withValidation(pathSatisfies, validator);
export { pathSatisfiesWithValidator as pathSatisfies };

// function pathSatisfies (fxn, path, obj) {
//   const stringToPath = function (path) {
//     if (typeof path !== 'string') return path;
//     let output = [];
//     path.split('.').forEach(function (item) {
//       item.split(/\[([^}]+)\]/g).forEach(function (key) {
// 			// Push to the new array
//      if (key.length > 0) {
// 			  output.push(key);
//       }
//       });
//     });
//     return output;
//   };
//   path = stringToPath(path);
//   let current = obj;
//   for (let i = 0; i < path.length; i += 1) {
//     if (!current[path[i]]) return fxn;
//     current = current[path[i]];
//   }
//   return true;
// }
// export { pathSatisfies };
