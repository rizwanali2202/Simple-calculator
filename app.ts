import inquirer from "inquirer";

// asking some question from user through inquirer
let answers = await inquirer.prompt([
    {message : "enter first number", type : "number", name : "firstNumber"},
    {message : "enter second number", type : "number", name : "secondNumber"},
    {
        message : "select one operator for operation",
        type : "list",
        name : "operator",
        choices : ["addation", "subtraction", "multiplication", "division"],
    },
])

// conditional statement if else
if(answers.operator === "addation"){
    console.log(answers.firstNumber + answers.secondNumber)
}
else if(answers.operator === "subtraction") {
    console.log(answers.firstNumber - answers.secondNumber)
}
else if(answers.operator === "multiplication"){
    console.log(answers.firstNumber * answers.secondNumber)
}
else if(answers.operator === "division"){
    console.log(answers.firstNumber / answers.secondNumber)
}
else {
console.log("invalid input")
};