// Finish the program
const secret = "wargaming";
// Creation of the mask and mistakeCount outside the function too store the result
const secretLength = secret.length;
const mask = new Array(secretLength).fill('_');
var mistakeCount = 0;

function guess(character) {
  // Putting the character and the character of the secret in lower case
  const arrSecret = secret.toLowerCase().split('')
  const lowerChara = character? character.toLowerCase(): null ;
  //console.log(arrSecret)
  // If character is not defined just returning the mask without couting mistake
  if(lowerChara === null){return mask.join('')};
  // Looking if the character guess whas in the secret word
  if(arrSecret.includes(lowerChara)){
    // Revealing logic: Looking the position of the letter in the secret word to reveale them in the mask
    if(mask.includes(lowerChara)){
      mistakeCount +=1;
    } else {
      for (let i = 0; i < arrSecret.length; i++) {
        if(arrSecret[i] === lowerChara){
          mask[i] = lowerChara;
        }
      };
    };
  } else mistakeCount +=1;
  //console.log(mask)
  return mask.join('');
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
//guess('w');
//console.log(guess('w'))
console.log(guess())
//guess('w');
//var expetResult = secret.split('').findIndex(letter => letter.toLowerCase() == 'a')
console.log(mistakeCount)