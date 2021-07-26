// /**
//  * String
//  * Number
//  * BigInt
//  * null
//  * undefined
//  * object
//  * Symbol
//  * Boolean
//  */
// /**
//  *
//  *
//  * value1 = null
//  * value2 =
//  */
// // const hasSameType = (...args) => {
// //   if (args.length === 1) {
// //     return true;
// //   }
// //   const hasNull = args.find((el) => el === null);
// //   if (hasNull) {
// //     return args.every((el) => el === null);
// //   }
// //   const firstElement = args[0];
// //   return args.every((el) => typeof el === typeof firstElement);
// // };
// function getOwnPropertyNames(obj) {
//   return Object.getOwnPropertyNames(obj).concat(
//     Object.getOwnPropertySymbols(obj)
//   );
// }
// function deepEqual(value1, value2) {
//   if (typeof value1 !== typeof value2) {
//     return false;
//   }
//   if (typeof value1 !== 'object' || typeof value2 !== 'object') {
//     return Object.is(value1, value2);
//   }
//   const value1Keys = getOwnPropertyNames(value1);
//   const value2Keys = getOwnPropertyNames(value2);
//   let equality = true;
//   if (value1Keys.length !== value2Keys.length) {
//     return false;
//   }
//   for (let key of value1Keys) {
//     const firstValue = value1[key];
//     const seecondValue = value2[key];
//     equality = equality && deepEqual(firstValue, seecondValue);
//   }
//   return equality;
// }
// function include(needle, haystack) {
//   for (const element of haystack) {
//     if (deepEqual(needle, element)) {
//       return true;
//     }
//   }
//   return false;
// }
// function union(listA, listB) {
//   const result = [];
//   const combinedList = listA.concat(listB);
//   for (const element of combinedList) {
//     // If result does not include element, push element to result
//     if (!include(element, result)) {
//       result.push(element);
//     }
//   }
//   return result;
//   // const result = listA;
//   // for (const el of listB) {
//   //   if (!result.includes(el)) {
//   //     result.push(el);
//   //   }
//   // }
//   // return result;
// }
// function validator(listA, listB) {
//   if (!Array.isArray(listA)) {
//     throw new Error(`Expected listA to be an Array`);
//   }
//   if (!Array.isArray(listB)) {
//     throw new Error(`Expected listB to be an Array`);
//   }
// }
// function withValidation(fn, validator) {
//   return (...args) => {
//     validator(...args);
//     return fn.apply(this, args);
//   };
// }
// const unionWithValidator = withValidation(union, validator);
// export { unionWithValidator as union };

function union(...args) {
  const firstArgs = args[0];
  const secondArgs = args[1];
  if (typeof args === 'function') {
    return 'Seems passed Args is a function.';
  }
  if (typeof args === 'object') {
    if (JSON.stringify(firstArgs) === JSON.stringify(secondArgs)) {
      return firstArgs;
    }
  }
  const mergeArgs = [...firstArgs, ...secondArgs];
  const unionOfArgs = [...new Set(mergeArgs)];
  return unionOfArgs;
}

export { union };
