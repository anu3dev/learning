// function compareTwoArray(firstArray, secondArray) {
//   if (JSON.stringify(firstArray) === JSON.stringify(secondArray)) {
//     return true;
//   }
//   return false;
// }

const compareTwoArray = (firstArray, secondArray) => {
  if (JSON.stringify(firstArray) === JSON.stringify(secondArray)) {
    return true;
  }
  return false;
};

export { compareTwoArray };
