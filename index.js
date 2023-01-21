// [x]TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs/promises");
const generateMarkdown = require("./utils/generateMarkdown");

// [x]TODO: Create an array of questions for user input
const questions = [
	{
		type: "input",
		name: "repo.name",
		message: "What is the name of your repository?",
	},
	{
		type: "input",
		name: "repo.description",
		message: "Please write a short description of your project",
	},
	{
		type: "input",
		name: "repo.installation",
		message: "What command should be run to install dependencies?",
		default: "npm i",
	},
	{
		type: "input",
		name: "repo.usage",
		message: "What does the user need to know about using the repo?",
	},
	{
		type: "input",
		name: "repo.contributing",
		message: "What does the user need to know about contributing to the repo?",
	},
	{
		type: "list",
		name: "repo.license",
		message: "What kind of license should your project have?",
		choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
	},
	{
		type: "input",
		name: "repo.tests",
		message: "What command should be run to run tests?",
		default: "npm test",
	},
	{
		type: "input",
		name: "repo.username",
		message: "What is your GitHub username?",
	},
	{
		type: "input",
		name: "repo.email",
		message: "What is your email address?",
	},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
	inquirer.prompt(questions).then((answers) => {
		console.log(answers);
	});
}

// Function call to initialize app
init();

