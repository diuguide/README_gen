// installations/dependecies
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please enter the name of your project?",
    },
    {
        type: "input",
        name: "name",
        message: "Please enter your name:",
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a project description?",
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter installation instructions:",
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter usage instructions:",
    },
    {
        type: "input",
        name: "projectURL",
        message: "Enter your webpage address.",
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email:",
    },
    {
        type: "list",
        name: "license",
        message: "Please select a license for your project.",
        choices: [
            "Apache License 2.0",
            "GNU GPLv3",
            "MIT",
            "ISC",
            "None"
        ],
    },
    {
        type: "list",
        name: "contributors",
        message: "Would you like other developers to contribute to your project?",
        choices: [
            "Yes",
            "No"
        ]
    },
    {
        type: "input",
        name: "test",
        message: "Please provide any relavent testing comments here:",
    },

];
//function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, generateMarkdown(data));
};

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function (answers) {
        console.log(answers);

        writeToFile("goodREADME.md", answers);
    });
};
init();
