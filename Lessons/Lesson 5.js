// Can you write a function called printStuff that takes any
// number of parameters and prints each of them to the
// console on a new line



function printStuff(...strings) {
  // console.log(x);
  // console.log(y);
  for (let i = 0; i < strings.length; i++) {
    console.log(strings[i]);
  }
}


printStuff("Hello world!");
printStuff("Lots", "of", "parameters!");
printStuff("You rock");























































































// Here's a hint if you're stuck:
// A function looks like this:
/*
function function_name(param1, param2, ...otherParams) {
  // some code
}
*/