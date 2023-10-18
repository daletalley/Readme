const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const { generateMarkdown } = require('./utils/generateMarkdown');

const writeFileAsync = util.promisify(fs.writeFile);
const mkdirAsync = util.promisify(fs.mkdir);
const accessAsync = util.promisify(fs.access);

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
    name: "usage",
    message: "What is this project usage for?"
  },
  {
    type: "input",
    name: "dependencies",
    message: "What command should be run to install dependencies?",
    default: "npm i"
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
    message: "Who are the contributors of this project?"
  },
  {
    type: "input",
    name: "tests",
    message: "Is there a test included?",
    default: "npm test"
  },
  {
    type: "input",
    name: "questions",
    message: "What do I do if I have an issue?"
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return writeFileAsync(fileName, data);
}

// TODO: Create a function to initialize app
async function init() {
  try {
    // Ask user questions and generate responses
    const answers = await inquirer.prompt(questions);
    const generateContent = generateReadme(answers);

    const directoryPath = "./newREADME";
    const filePath = `${directoryPath}/README.md`;

    // Check if the directory already exists
    try {
      await accessAsync(directoryPath, fs.constants.F_OK);
      console.log("Directory already exists. Skipping creation.");
    } catch (err) {
      // Create the directory
      await mkdirAsync(directoryPath);
      console.log("Directory created successfully.");
    }

    // Check if the file already exists
    try {
      await accessAsync(filePath, fs.constants.F_OK);
      console.log("File already exists. Skipping creation.");
    } catch (err) {
      // Write new README.md to the directory
      await writeToFile(filePath, generateContent);
      console.log("✨  Successfully created a beautiful README.md in the 'newREADME' directory! ✨");
    }
  } catch (err) {
    console.log(err);
  }
}

// Function call to initialize app
init();