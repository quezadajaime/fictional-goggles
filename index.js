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
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'emailAddress',
        message: 'Please enter your email address.'
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw new Error(err);

        console.log('The README has been generated, please check the generated-readme file!')
    })
}

// TODO: Create a function to initialize app
function init() {

    console.log(`
    Please answer the following questions to help the app generate a README
    `);

    inquirer.prompt(questions)
        .then(readmeData => {
            writeToFile('./generated-readme/readme.md', generateMarkdown(readmeData))
        })
};

// Function call to initialize app
init();
