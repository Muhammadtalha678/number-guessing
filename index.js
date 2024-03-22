#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to the Number Guessing Game!");
// First Generate Random Numbers by computer
let randomNumber = Math.floor(Math.random() * 10 + 1);
// User attempts
let attempts = 5;
console.log("You have 5 attempts to guess it.");
// use loop for attempts
for (let index = 1; index <= attempts; index++) {
    //get input from user through inquirer
    const answerUser = await inquirer.prompt([
        {
            message: "Guess the number between 1 and 10",
            type: "number",
            name: "guessedNumber"
        }
    ]);
    // use if else to check
    if (answerUser.guessedNumber === randomNumber) {
        console.log("Congratulations! You've guessed the correct number!");
        break;
    }
    // show tem attempts
    // provide hints
    if (answerUser.guessedNumber > randomNumber) {
        console.log("Too high! Try again.");
    }
    else {
        console.log("Too low! Try again.");
    }
    if (answerUser.guessedNumber !== randomNumber && index < 5) {
        console.log(`You have ${attempts - index} attempts left`);
    }
    if (attempts === index) {
        console.log("Game over! You've run out of attempts.");
        console.log(`The correct number was ${randomNumber}. Better luck next time!`);
    }
}
