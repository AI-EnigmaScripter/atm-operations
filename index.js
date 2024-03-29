#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 20000; // Dollar
let myPin = 2233;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: chalk.blue("Enter the pin number"),
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.green("Correct pin code!!!"));
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: chalk.blue("Select an option"),
            type: "list",
            choices: [chalk.yellow("Withdraw", "Check Balance", "Transfer", "Bill Payment")]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: chalk.blue("Enter the withdraw amount"),
                type: "number"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log(chalk.red("Withdraw declined!!."));
        }
        else {
            myBalance -= amountAns.amount;
            console.log(chalk.bgBlueBright("Withdraw successfully!!!."));
        }
    }
    else if (operationAns.operation === "Check Balance") {
        if (myBalance > 0) {
            console.log(chalk.black("Your balance is: " + myBalance));
        }
        else {
            console.log(chalk.red("You have no balance in your account."));
        }
    }
    else if (operationAns.operation === "Transfer") {
        let transferAmount = await inquirer.prompt([
            {
                name: "amount",
                message: chalk.blue("Enter the amount to transfer"),
                type: "number"
            }
        ]);
        if (transferAmount.amount > myBalance) {
            console.log(chalk.red("Transfer declined!!."));
        }
        else {
            // for transfer
            console.log(chalk.green("Transfer of " + transferAmount.amount + " successful."));
            myBalance -= transferAmount.amount;
        }
    }
    else if (operationAns.operation === "Bill Payment") {
        let billAmount = await inquirer.prompt([
            {
                name: "amount",
                message: chalk.blue("Enter the bill amount"),
                type: "number"
            }
        ]);
        if (billAmount.amount > myBalance) {
            console.log(chalk.red("Bill payment declined!!."));
        }
        else {
            // for bill payment
            console.log(chalk.green("Bill payment of " + billAmount.amount + " successful."));
            myBalance -= billAmount.amount;
        }
    }
}
else {
    console.log(chalk.yellow("Incorrect pin code!"));
}
