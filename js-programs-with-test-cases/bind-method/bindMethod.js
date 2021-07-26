// You can change the `args`
function bind(...args) {
  const func = args[0];
  const obj = args[1];
  return func.bind(obj);
}
module.exports = { bind };
