# Internship task C: Hangman

For our new Hangman game, the player will guess a secret word by trying different alphabet characters. Everytime the player guesses a letter a new string is created that only shows correctly guessed characters and "_" instead of the rest of the characters.
Create a function that returns the next masked output when called with a guessed character as a parameter. If the player didn't manage to guess the whole secret by the time he guessed 6 times without revealing a new letter, print out: "GAME OVER" instead of the mask.

### Test unit using Mocha
