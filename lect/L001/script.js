function max() {
  const values = arguments;
  let max = -Infinity;

  for (let i = 0; i < values.length; i++) {
    if (values[i] > max) {
      max = values[i];
    }
  }
  return max;
}

const x = [1, 2, 3, 4, 5, 6, 7]

console.log(max(...x));
