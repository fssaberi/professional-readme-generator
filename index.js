// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile, copyFile } = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'name',
        message: 'Please enter a description of your project.'
    },
    {
        type: 'input',
        name: 'name',
        message: 'Please enter installation instructions for your project.'
    },
    {
        type: 'input',
        name: 'name',
        message: 'Please enter usage information for your project.'
    },
    {
        type: 'input',
        name: 'name',
        message: 'Please enter contributing guidelines for your project.'
    },
    {
        type: 'input',
        name: 'name',
        message: 'Please enter test instructions for your project.'
    },
    {
        type: 'checkbox',
        name: 'licenses',
        message: 'Which licenses did you use to build your project?',
        choices: []
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email.'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();