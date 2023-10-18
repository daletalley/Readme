// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);
const mkdirAsync = util.promisify(fs.mkdir);
const accessSync = util.promisify(fs.accessSync);

// TODO: Create an array of questions for user input
const questions = [ 
  {
    type: "input",
    name: "username",
    message: "Please enter your GitHub username: "
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email: "
  },
  {
    type: "input",
    name: "projectTitle",
    message: "What is the project title?",
  },
  {
    type: "input",
    name: "description",
    message: "Write a brief description of your project: "
  },
  {
    type: "input",
    name: "installation",
    message: "Describe the installation process if any: ",
  },
  {
      type: "input",
      name: "dependencies",
      message: "What command should be run to install dependencies?",
      default: "npm i",
  },
  {
    type: "input",
    name: "usage",
    message: "What is this project usage for?"
  },
  {
    type: "list",
    name: "license",
    message: "Chose the appropriate license for this project: ",
    choices: [
      "Apache",
      "Academic",
      "GNU",
      "ISC",
      "MIT",
      "Mozilla",
      "Open"
    ]
  },
  {
    type: "input",
    name: "contributing",
    message: "What does the user need to know about contributing to the repo?"
  },
  {
    type: "input",
    name: "tests",
    message: "What command should be run to run tests?",
    default: "npm test"
  },
  {
    type: "input",
    name: "questions",
    message: "What do I do if I have an issue with the repository?"
  },
  {
    type: "input",
    name: "username",
    message: "Please enter your GitHub username: "
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email: "
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return writeFileAsync(fileName, data);
  }

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
