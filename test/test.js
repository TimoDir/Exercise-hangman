var assert = require('assert');
var guess = require('../src/script')

describe('guess', function(){
    const secret = 'wargaming';
    const goodCharacter = 'a';
    const badCharacter = 'd';
    const output = guess();
    it('Should return a string', function(){
        assert.strictEqual(typeof(output), 'string', "The function didn't return a string")
    });
    it('Should return a mask string with the same length that the secret word.', function(){
        assert.strictEqual(output.length, secret.length, "The string return by the function is not the same length than the secret word.")
    });
    it('Should change the mask and reveale the letter of secret when a good letter is pass as an argument.', function(){
        var expetResult = secret.split('').filter(letter => letter.toLowerCase() == goodCharacter);
        var controle = guess(goodCharacter).split('').filter(letter => letter.toLowerCase() == goodCharacter);
        assert.strictEqual(controle, expetResult, "The function didn't reveal the mask when the argument is a good character.")
    })
})