// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project's name?"

    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project"


    },
    {
        type: "list",
        name: "license",
        message: "Select the license your project should have?",
        choices: [
            'MIT', 'Open Software License 3.0',
            'Microsoft Public License',
            'GPL 3.0', 'BSD 3'
        ],

    },
    {
        type: "input",
        name: "install",
        message: "What command should be run to install dependencies?"

    },
    {
        type: "input",
        name: "tests",
        message: "what command should be run to run tests?"

    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repo?"

    },
    {
        type: "input",
        name: "contribution",
        message: "What does the user need to know about contributing to the repo?"

    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"

    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"

    }

];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? err : 'Success!'
    );
}

// Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            data = generateMarkdown(response);
            writeToFile('README.md', data);
        });
}
// Function call to initialize app
init();
