// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        //Project Title
        type: 'input',
        name: 'projectTitle',
        message: 'Please enter the name of you project',
        validate: projectTitleInput => {
            if (projectTitleInput) {
                return true;
            } else {
                console.log('A project title must be added!');
                return false;
            }
        }
    },
    {
        //Project Description
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project',
        validate: descrptionInput => {
            if (descrptionInput) {
                return true;
            } else {
                console.log('A description of the project is required!');
                return false;
            }
        }

    },
    // installation instructions
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide instructions to install your project',
        validate: descrptionInput => {
            if (descrptionInput) {
                return true;
            } else {
                console.log('Instructions to installing your project is required!');
                return false;
            }
        }
    },
    // Project usage
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions to use your project.',
        validate: descrptionInput => {
            if (descrptionInput) {
                return true;
            } else {
                console.log('You need to provide instructions to use your project');
                return false;
            }
        }
    },
    // Contributing
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide instructions on how users can contribute to your project.',
        validate: descrptionInput => {
            if (descrptionInput) {
                return true;
            } else {
                console.log('You need to provide instructions.');
                return false;
            }
        }
    },
    // project tests
    {
        type: 'input',
        name: 'test',
        message: 'Please provide instructions on how users can test your project',
        validate: descrptionInput => {
            if (descrptionInput) {
                return true;
            } else {
                console.log('Instructions for testing is required!');
                return false;
            }
        }
    },
//license selection
    {
        type: 'list',
        name: 'licenseChoice',
        message: 'Which license does your project have? If your project has no licence choose "none". Go to chooselicense.com for more information on licenses.',
        choices: [
            'Apache 2.0',
            'Mit',
            'Boost',
            'None',
        ],
    },

    {

        //github input
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
        //email input
        type: 'input',
        name: 'emailAddress',
        message: 'Please enter your email address where the user may reach you.',
        validate: emailAddress => {
            if (emailAddress) {
                return true;
            } else {
                console.log('Please enter an email address');
                return false;
            }
        }
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
