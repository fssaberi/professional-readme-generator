// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter installation instructions for your project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage information for your project.'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please enter contributing guidelines for your project.'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please enter test instructions for your project.'
    },
    {
        type: 'checkbox',
        name: 'licenses',
        message: 'Which licenses did you use to build your project?',
        choices: ['Apache', 'Boost', 'Eclipse', 'MIT', 'Mozilla']
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
function init() {
    return inquirer.prompt(questions).then((answers) => {
        console.log(answers)
        fs.writeFileSync('readme-template.md', generateMarkdown(answers))
    })
    .catch((err) => {
        console.log(err);
    })
}

// Function call to initialize app
init();