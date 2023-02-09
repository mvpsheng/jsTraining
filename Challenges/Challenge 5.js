// This is a classic, standard challenge: FizzBuzz
// Write a function called fizzbuzz that takes in
// a number and returns 'fizz' if the number is
// divisible by 3, 'buzz' if the number is
// divisible by 5, and 'fizzbuzz' if the number
// is divisible by 3 and 5. Otherwise the function
// should return the number input.
function fizzbuzz(a) {
  if (a % 3 == 0 && a % 5 == 0) {
    return 'fizzbuzz';
  } else if (a % 5 == 0) {
    return 'buzz';
  } else if (a % 3 == 0)  {
    return 'fizz';
  } else {
    return a;
  }
}
