var assert = require('assert');
var guess = require('./script_test')

// Creation of the mask and mistakeCount outside the test unit too store the result
const secret = 'wargaming'
const secretLength = secret.length;
var mask = new Array(secretLength).fill('_');
var mistakeCount = 0;

describe('guess', function(){
    const goodCharacter = 'w';
    const badCharacter = 'd';
    const output = guess();

    // Reset the state of the mask and the mistakeCount before each test
    beforeEach(function(){
        mask = Array(secretLength).fill('_');
        mistakeCount = 0;
      });

    it('Should return a string', function(){
        const expectedResult = 'string';
        assert.strictEqual(typeof(output), expectedResult, "The function didn't return a string")
    });
    it('Should return a mask string with the same length that the secret word.', function(){
        const expectedResult = secret.length;
        assert.strictEqual(output.length, expectedResult, "The string return by the function is not the same length than the secret word.")
    });
    it('Should change the mask and reveal the letter of secret when a good letter is pass as an argument.', function(){
        const expectedResult = goodCharacter.toLowerCase();
        // Should return an array with the good character with the filter method + accessing it by typing the first index [0]
        const controle = guess(goodCharacter).split('').filter(letter => letter.toLowerCase() == goodCharacter.toLowerCase())[0];
        assert.strictEqual(controle, expectedResult, "The function didn't reveal the mask when the argument is a good character.")
    });
    it("Should return 'GAME OVER!' when 6 or more mistake was made.", function(){
        const expectedResult = 'GAME OVER!';
        for(let i=0; i < 8; i++){
            guess(badCharacter);
        };
        const controle= guess(badCharacter);
        assert.strictEqual(controle, expectedResult, "The function didn't return 'GAME OVER!' when 6 and more mistake was made.")
    });
});