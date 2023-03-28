
const inquirer = require('inquirer');
const fs = require('fs') 
const generateMarkdown = require('./generateMarkdown.js');

const questions = [
    {
        type: 'input',
        message: 'What is the project title?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'A description of your project including the what, why and how of your project. Use the following questions to help quide you. \n What was your movitvation? \n Why did you build this project? \n What problem does it solve? \n What did you learn?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Table Of Contents (add any addition info if needed)',
        name: 'contents',
    },
    {
        type: 'input',
        message: 'Describe the installation instructions:',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Usage (describe how to use the site)',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Provide the path for a img of your site',
        name: 'picture',
    },
    {
        type: 'list',
        message: 'Choose a License:',
        name: 'license',
        choices: ['Apache 2.0 License', 'Boost Software License 1.0','BSD 3-Clause License', 'BSD 2-Clause License','The MIT License', 'Mozilla Public License 2.0', 'Eclipse Public License 1.0', 'Creative Commons Zero', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'None']
    },
    {
        type: 'input',
        message: 'List collaborators (add third-party assest or collaberators)',
        name: 'contributes',
    },
    {
        type: 'input',
        message: 'Testing:',
        name: 'test',
    },
    {
        type: 'input',
        message: 'GitHub username:',
        name: 'git',
    },
    {
        type: 'input',
        message: 'Email Adddress:',
        name: 'contact',
    },
];
inquirer.prompt(questions)
.then((data) => {
    const filename = "README.md";
    const license = data.license;

// generating the markdown file template
    const markDown = 
`# ${data.name}
<a href='${generateMarkdown.renderLicenseLink(license)}'>${generateMarkdown.renderLicenseBadge(license)}</a>

## Description

${data.description}

## Table of Contents 
${data.contents}
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Test](#test)
- [Questions](#questions)

## Installation

${data.install}

## Usage

${data.usage}
<img src='${data.picture}'>
    
## Credits

${data.contributes}

## License
${license}
<a href='${generateMarkdown.renderLicenseLink(license)}'>Click here for more info</a>


## Test

${data.test}

## Questions | Get in Touch
Email Address:
<a href="mailto:${data.contact}">${data.contact}</a>

Link to GitHub:
<a href='https://github.com/${data.git}'>${data.git}</a>
`
    
    fs.writeFile(filename, markDown, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });

