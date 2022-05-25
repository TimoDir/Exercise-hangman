var assert = require('assert');
var guess = require('../src/script')

describe('guess', function(){
    const secret = 'wargaming';
    const goodCaracter = 'w';
    const badCaracter = 'd';
    const output = guess();
    it('Should return a mask string with the same length that the secret word.', function(){
        assert.strictEqual(output.length, secret.length, "The string return by the function is not the same length than the secret word.")
    })
})