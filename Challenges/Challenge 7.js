// A prime number is a number divisible
// only by itself and 1. Can you write a
// function called isPrime that takes in
// a number and returns a boolean
// indicating whether or not the input
// number is a prime number.
function isPrime(a) {
  for (let i = 2; i < Math.sqrt(a); i++) {
    if (a % i == 0) {
      return false;
    }
  }
  return true;
}
