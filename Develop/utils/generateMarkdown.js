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
  }

  return licenseBadge;
}
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);

  return `
# ${data.projectTitle}

## Description

${data.description}

## Table of Contents

- [License](#license)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## License

${licenseBadge}

This project is licensed under the ${data.license} license.

## Installation

To install the necessary dependencies, run the following command:

\`\`\`
${data.dependencies}
\`\`\`

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

To run tests, run the following command:

\`\`\`
${data.tests}
\`\`\`

## Questions

If you have any questions, please contact me at ${data.email}. You can also open an issue on the [GitHub repository](https://github.com/${data.username}/${data.projectTitle}).
`;
}

module.exports = { generateMarkdown };