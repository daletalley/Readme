// index.js is the entry point for the application
// The application will prompt the user for information about their application repository
// Then a high-quality, professional README.md is generated with the title of the project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// Import required modules
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const { generateMarkdown } = require('./generateMarkdown');

// Promisify required functions
const writeFileAsync = util.promisify(fs.writeFile);
const mkdirAsync = util.promisify(fs.mkdir);
const accessAsync = util.promisify(fs.access);

// Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "username",
    message: "Please enter your GitHub username: ",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email: ",
  },
  {
    type: "input",
    name: "projectTitle",
    message: "What is the project title?",
  },
  {
    type: "input",
    name: "description",
    message: "Write a brief description of your project: ",
  },
  {
    type: "input",
    name: "installation",
    message: "Describe the installation process if any: ",
  },
  {
    type: "input",
    name: "usage",
    message: "What is this project usage for?",
  },
  {
    type: "input",
    name: "dependencies",
    message: "What command should be run to install dependencies?",
    default: "npm i",
  },
  {
    type: "list",
    name: "license",
    message: "Choose the appropriate license for this project: ",
    choices: [
      "Apache",
      "Academic",
      "GNU",
      "ISC",
      "MIT",
      "Mozilla",
      "Open",
    ],
  },
  {
    type: "input",
    name: "contributing",
    message: "Who are the contributors of this project?",
  },
  {
    type: "input",
    name: "tests",
    message: "Is there a test included?",
    default: "npm test",
  },
  {
    type: "input",
    name: "questions",
    message: "What do I do if I have an issue?",
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  return writeFileAsync(fileName, data);
}

// Function to initialize app
async function init() {
  try {
    // Ask user questions and generate responses
    const answers = await inquirer.prompt(questions);
    const generateContent = generateMarkdown(answers);

    // Define directory and file paths
    const directoryPath = "./newREADME";
    const filePath = `${directoryPath}/README.md`;

    // Check if the directory already exists
    try {
      await accessAsync(directoryPath, fs.constants.F_OK);
      console.log("Directory already exists. Skipping creation.");
    } catch (err) {
      // Create the directory if it doesn't exist
      await mkdirAsync(directoryPath);
      console.log("Directory created successfully.");
    }

    // Write new README.md to the directory
    await writeToFile(filePath, generateContent);
    console.log(
      "✨  Successfully created a beautiful README.md in the 'newREADME' directory! ✨"
    );
  } catch (err) {
    console.log(err);
  }
}

// Function call to initialize app
init();