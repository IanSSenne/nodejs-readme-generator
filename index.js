// [x]TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs/promises");
const axios = require("axios");
const MDDocument = require("./utils/generateMarkdown");

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
		choices: [],
	},
	{
		type: "input",
		name: "repo.tests",
		message: "What command should be run to run tests?",
		default: "npm run test",
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
function writeToFile(fileName, data) {
	fs.writeFile(fileName, data);
}

// TODO: Create a function to initialize app
async function init() {
	const licenses = await axios.get("https://api.github.com/licenses").then((res) => res.data)
	questions[5].choices.push(...licenses.map((license) => license.name));

	const response = (await inquirer.prompt(questions));
	response.repo.license = licenses.find((license) => license.name === response.repo.license);
	let licenseMeta = (await axios.get(response.repo.license.url)).data.body;
	let md = new MDDocument();
	md.header(response.repo.name, 1);
	md.badge("License", response.repo.license.spdx_id, "blue",{style:"plastic"});
	md.p(response.repo.description);
	md.header("Table of Contents", 2);
	md.list([
		MDDocument.link("Installation", "#installation"),
		MDDocument.link("Usage", "#usage"),
		MDDocument.link("Contributing", "#contributing"),
		MDDocument.link("Tests", "#tests"),
		MDDocument.link("Questions", "#questions"),
		MDDocument.link("License", "#license"),
	]);
	md.header("Installation", 2);
	md.p(MDDocument.inlineCode(response.repo.installation));
	md.header("Usage", 2);
	md.p(response.repo.usage);
	md.header("Contributing", 2);
	md.p(response.repo.contributing);
	md.header("Tests", 2);
	md.p(MDDocument.inlineCode(response.repo.tests));
	md.header("Questions", 2);
	md.p("If you have any questions about the repo, open an issue or contact me directly at " +
		MDDocument.link(response.repo.email,"mailto:"+response.repo.email)+ ".");
	md.header("License", 2);
	md.p(MDDocument.bold(response.repo.license.name));
	md.code(licenseMeta);
	writeToFile("README.md", md.toString());
}

// Function call to initialize app
init();

