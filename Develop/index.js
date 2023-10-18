const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");

const writeFileAsync = util.promisify(fs.writeFile);
const mkdirAsync = util.promisify(fs.mkdir);
const accessAsync = util.promisify(fs.access);

// TODO: Create an array of questions for user input
const questions = [
  // ... your questions here
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