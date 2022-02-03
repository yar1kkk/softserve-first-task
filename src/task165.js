module.exports.task165 = (arr) => {
  // If our first number is not correct return message about that
  if (arr[0] <= 0) return "Enter the correct array!";

  let sum = 0; // Create variable sum
  let i = 0; // Create iterator

  while (i < arr.length) {
    if (arr[i] <= 0) break; // Check if A2...An > 0
    sum = sum + (arr[i]);
    ++i;
  }

  return sum / i; // Return arithmetic mean
};
