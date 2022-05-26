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

  // If character is not defined just returning the mask without counting mistake
  if(lowerChara === null){return mask.join('')};

  // Looking if the character guess what's in the secret word and if it's not already inside the mask
  if(arrSecret.includes(lowerChara)){
    if(mask.includes(lowerChara)){
      mistakeCount +=1;

  // Revealing logic: Looking the position of the letter in the secret word to reveal them in the mask
    } else {
      for (let i = 0; i < arrSecret.length; i++) {
        if(arrSecret[i] === lowerChara){
          mask[i] = lowerChara;
        }
      };
    };
  } else mistakeCount +=1;

  // Logic looking how many mistake was made, if 6 or more return GAME OVER
  if(mistakeCount >= 6 ){
    return 'GAME OVER!'
  } else return mask.join('');
};

// export the function to the test unit
module.exports = guess;