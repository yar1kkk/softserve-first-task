module.exports.task88 = (number) => {
  const arr = Math.pow(number, 2)
    .toString()
    .split("")
    .filter(num => num === '3');

  return arr[0] !== undefined;
};
