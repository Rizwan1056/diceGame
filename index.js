import inquirer from "inquirer";
import chalk from "chalk";
// Dice Game  
let randomNumber = Math.floor(Math.random() * 6 + 1);
let guess = 0;
while (guess != randomNumber) { // while loop exeute until condition is true
    guess = await inquirer.prompt([{
            name: "guess",
            type: "number",
            message: "Enter your guess"
        }
    ]);
    if (guess.guess === randomNumber) { // userInput === randomInput
        console.log(chalk.green(`You win and Random Number is ${randomNumber}`));
        break;
    }
    else {
        console.log(chalk.yellow(`You loss`));
    }
}
