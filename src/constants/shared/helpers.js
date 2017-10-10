export function limitNumericalInput(input, key, value, min, max, integer) {
  if (Number(value) <= min) {
    input[key] = integer ? Math.floor(min) : min;
  } else if (Number(value) >= max) {
    input[key] = integer ? Math.floor(max) : max;
  } else {
    input[key] = integer ? Math.floor(Number(value)) : Number(value);
  }
}
