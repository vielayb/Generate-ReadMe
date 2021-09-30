const mitLink = 'Licensed under the [MIT](https://choosealicense.com/licenses/mit/) license'
const iscLink = 'Licensed under the [ISC](https://choosealicense.com/licenses/isc/) license'
const apacheLink = 'Licensed under the [Apache](https://choosealicense.com/licenses/apache-2.0/) license'
const gnuLink = 'Licensed under the [GNU](https://choosealicense.com/licenses/gpl-3.0/) license'

const mitBadge = '![Badge](https://img.shields.io/badge/License-MIT-blue)'
const iscBadge = '![Badge](https://img.shields.io/badge/License-ISC-blue)'
const apacheBadge = '![Badge](https://img.shields.io/badge/license-Apache-blue)'
const gnuBadge = '![Badge](https://img.shields.io/badge/license-GNU-blue)'
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(answers) {
  if(answers.license == 'MIT') {
    return (mitBadge);
  } else if(answers.license == 'ISC') {
    return (iscBadge);
  } else if(answers.license == 'Apache') {
    return (apacheBadge);
  } else if(answers.license == 'GNU') {
    return (gnuBadge);
  }
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(answers) {
  if(answers.license == 'MIT') {
    return (mitLink);
  } else if(answers.license == 'ISC') {
    return (iscLink);
  } else if(answers.license == 'Apache') {
    return (apacheLink);
  } else if(answers.license == 'GNU') {
    return (gnuLink);
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {}

//******************** Data *********************
const generateMarkdown = (answers) => {

  return `
# README
${renderLicenseBadge(answers)}
## Description
${answers.description}
## Table Of Contents
* [Description](#description)
* [Usage](#usage)
* [Credits](#credits)
* [Questions](#questions)
* [License](#license)
## Usage
${answers.usage}
![screenshot](/assets/images/readme-gen.png)
## Credits
${answers.credits}
## Questions
If you have any questions, please feel free to reach me at my GitHub or Email.
* GitHub: https://github.com/${answers.github}
* Email: ${answers.email}
## License
${renderLicenseLink(answers)}
  `;
};

module.exports = generateMarkdown;



