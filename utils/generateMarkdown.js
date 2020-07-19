function generateMarkdown(data) {
  return `# ${data.title} 
  ${data.license.badge} [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](https://www.contributor-covenant.org/version/2/0/code_of_conduct/)
  # Table of Contents
  * [Project Description](#project-description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [License](#license)
  * [Contributions](#contributions)
  * [Questions](#questions)
  # Project Description
  ${data.description}
  # Installation
  ${data.installation}
  # Usage
  ${data.usage}
  # Tests
  ${data.test}
  # License
  ${data.license.text}
  # Contributions
  ${data.contributors}
  # Questions
  For additional information, please e-mail the project manager [${data.name}](https://github.com/${data.github}/): ${data.email}.  
`;
}
module.exports = generateMarkdown;