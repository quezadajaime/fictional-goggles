// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let badgeLabel = license.replace(" ", "&ensp;");
    return `
    [![Generic badge](https://img.shields.io/badge/License-${badgeLabel}-green.svg)](${renderLicenseLink(license)})
    `
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    let linkUrl = license.toLowerCase().replace(" ", "-");
    return `https://choosealicense.com/licenses/${linkUrl}/.`
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

    if (license === "None") {
        return "";
    } else {

        return `
    ### Licensing 
    ${license}
    ${renderLicenseBadge(license)}
    `
    }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    const { github, licenseChoice, ...info } = data;

    return `

    # ${info.projectTitle}

    ## Table Of Contents
    -[Description] (#description)
    -[Installation] (#installation)
    -[Usage] (#usage)
    -[Contributing] (#contributing)
    -[Testing] (#testing)
    -[Questions] (#questions)

    ## Project Description
    ${info.description}
    ${renderLicenseSection(licenseChoice)}

    ## Installation
    ${info.installation}

    ## Usage
    ${info.usage}

    ## Contributing
    ${info.contribution}

    ## Testing
    ${info.test}

    ## Questions
    Reach out to the owner of the repo, [${github}](https://github.com/${github}) at ${info.emailAddress}.

`;
}

module.exports = generateMarkdown;
