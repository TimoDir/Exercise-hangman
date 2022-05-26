// Finish the program
const secret = "wargaming";
function guess(character) {
  const arrSecret = secret.toLowerCase().split('')
  //console.log(arrSecret)
  // Creation of the mask
  const secretLength = secret.length;
  const mask = new Array(secretLength).fill('_');
  

  return mask;
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
//guess();
var expetResult = secret.split('').findIndex(letter => letter.toLowerCase() == 'a')
console.log(expetResult)