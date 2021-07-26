function debounce(fn, timeInMs) {
  let timerId;
  function debounceFn(...args) {
    if (timerId) {
      clearTimeout(timerId);
    }
    //snippet 1
    // const context = this
    // timerId = setTimeout(function(){
    //   fn.apply(context,args)
    // },timeInMs)
    // snippet 2
    timerId = setTimeout(() => {
      fn.apply(this, args);
      timerId = null;
    }, timeInMs);
  }
  debounceFn.cancel = function () {
    if (timerId) {
      clearTimeout(timerId);
    }
  };
  return debounceFn;
}
export { debounce };

// function debounce(callFn, delayTime) {
//   let debounceTime;
//   return (...args) => {
//     if (debounceTime) {
//       clearTimeout(debounceTime);
//     }
//     debounceTime = setTimeout(() => {
//       callFn.apply(this, args);
//     }, delayTime);
//   };
// }

// export { debounce };
