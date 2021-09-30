// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./Develop/utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'description',
        message: 'What is your project description?',
        validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter your project description!');
            return false;
        }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and images',
        validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please provide instructions and images');
            return false;
        }
        }
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please add credits!',
        validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please provide credits!');
            return false;
        }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username',
        validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter your GitHub username!');
            return false;
        }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address',
        validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter your email address!');
            return false;
        }
        }
    },
    {
        type: 'list',
        message: 'Please pick a license',
        name: 'license',
        choices: ['MIT', 'ISC', 'Apache', 'GNU'],
      },
]);
};

questions().then(answers => {console.log(answers)
    writeToFile(generateMarkdown(answers));
});

// TODO: Create a function to write README file
function writeToFile(data) {
fs.writeFile('ReadMe.md', data, err => {
    if (err) throw err;
    console.log('Readme Generator complete! Check out ReadME.md to see the output!');
  });
}