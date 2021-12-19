// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function getLicenseBadge(licenses) {
  let myLicense = '';

  if (licenses.includes("Apache")) {
    myLicense += `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    return myLicense;
  } 
  
  if (licenses.includes("Boost")) {
    myLicense += `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
    return myLicense;
  } 
  
  if (licenses.includes("Eclipse")) {
    myLicense += `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
    return myLicense;
  } 
  
  if (licenses.includes("MIT")) {
    myLicense += `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    return myLicense;
  } 
  
  if (licenses.includes("Mozilla")) {
    myLicense += `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    return myLicense;
  }

  if (licenses.includes("")) {
    myLicense = ``
    return myLicense;
  }

  return myLicense;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function getLicenseLink(licenses) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function getLicenseSection(licenses) {
  return `# ${data.licenses}
  ## License`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents

### -[description](#description)

### -[installation](#installation)

### -[usage](#usage)

### -[contributing](#contributing)

### -[tests](#tests)

### -[license](#licenses)

### -[questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.test}

## License
${data.licenses}
${getLicenseBadge(data.licenses)}

## Questions
${data.github}

${data.email}
`;
}

module.exports = generateMarkdown;