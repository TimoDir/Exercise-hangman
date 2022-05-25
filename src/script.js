// Finish the program
const secret = "wargaming";
function guess(character) {

  return "_________";
}

// export the function to the test unit
module.exports = guess;

// output test
const log = msg => {
  const divElement = document.createElement("div");
  divElement.innerText = msg;
  document.getElementById("log").append(divElement);
};
// Try uncommenting this
/*
log(guess("u"))
log(guess("a"))
log(guess("w"))
log(guess("e"))
log(guess("w"))
log(guess("g"))
log(guess("t"))
log(guess("d"))
log(guess("r"))
log(guess("s"))
*/