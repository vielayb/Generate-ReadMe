const mitLink = 'Licensed under the [MIT](https://choosealicense.com/licenses/mit/) license'
const iscLink = 'Licensed under the [ISC](https://choosealicense.com/licenses/isc/) license'
const apacheLink = 'Licensed under the [Apache](https://choosealicense.com/licenses/apache-2.0/) license'
const gnuLink = 'Licensed under the [GNU](https://choosealicense.com/licenses/gpl-3.0/) license'

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    renderLicenseBadge = "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(answers) {
console.log(answers.license);

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
## Description
${answers.description}
## Table Of Contents
* [Description](#description)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
## Usage
## Credits
${answers.credits}
## License
${renderLicenseLink(answers)}
  `;
};

module.exports = generateMarkdown;


