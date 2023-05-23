//function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  return renderLicenseSection(license)
}

// function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  return license ? `https://img.shields.io/badge/license-${license}-blue` : '';
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  licenseLink = renderLicenseLink(license);
  return license ? `![${license} license](${licenseLink})` : '';
}

//function to generate markdown for README
function generateMarkdown(data) {
  licenseBadge = renderLicenseBadge(data.license);
  return `# ${data.title}
  ${licenseBadge}
  ## Description 
  
  ${data.description} 

  ## Table of Contents
  * [installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  To install necessary dependencies, run the following command:
  \`\`\`
  '${data.install}'
  \`\`\`
  ## Usage
  \n\n
  '${data.usage}'

  ## License
  \nThis project is licensed under the ${data.license} \n.

  ## Contributing
  \n${data.contribution} \n

  ## Tests
  \nTo run test, run the following command: ${data.tests}\n

  ## Questions
  \nIf you have any questions about the repo, open an issue or contact me directly at ${data.email}. you can find more of my work at [${data.username}](https://github.com/${data.username})\n
`;
}

module.exports = generateMarkdown;
