// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
/**
 * 
 * @param {{name:string;description:string;installation:string;usage:string;contributing:string;license:string;tests:string;username:string;email:string;}} data 
 * @returns 
 */
function generateMarkdown(data) {
  return `# ${data.name}

`;
}

module.exports = generateMarkdown;
