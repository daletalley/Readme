// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = "";

  if (license === "MIT") {
    licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "Apache") {
    licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "GNU") {
    licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "ISC") {
    licenseBadge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
  } else if (license === "Mozilla") {
    licenseBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else if (license === "Academic") {
    licenseBadge = "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opensource.org/licenses/ODbL)";
  } else if (license === "Open") {
    licenseBadge = "[![License: OSL 3.0](https://img.shields.io/badge/License-OSL%203.0-blue.svg)](https://opensource.org/licenses/OSL-3.0)";
  }

  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";

  if (license === "MIT") {
    licenseLink = "[MIT License](https://opensource.org/licenses/MIT)";
  } else if (license === "Apache") {
    licenseLink = "[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "GNU") {
    licenseLink = "[GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "ISC") {
    licenseLink = "[ISC License](https://opensource.org/licenses/ISC)";
  } else if (license === "Mozilla") {
    licenseLink = "[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)";
  } else if (license === "Academic") {
    licenseLink = "[Open Database License (ODbL)](https://opensource.org/licenses/ODbL)";
  } else if (license === "Open") {
    licenseLink = "[Open Software License 3.0](https://opensource.org/licenses/OSL-3.0)";
  }

  return licenseLink;
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
