// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
    },
    {
        type: 'input'
        name: 'emailAddress'
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {

    console.log(`
    Please answer the following questions to help the app generate a README
    `);

    inquirer.prompt(quetsions)
    .then(readmeData) => {
        writeToFile('./dist/readme.md', generateMarkdown(readmeData))
    }
 }

// Function call to initialize app
init();
