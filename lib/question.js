const inquirer = require('inquirer');
const fs = require("fs/promises");


const question = [
    {
        type:'confirm',
        message:'Is you ?',
        name:'Color-select'
    },
    {
        type:'input',
        message:'what color do you want?',
        name:'Color-select'
    },
    {
        type:'list',
        message:'what color do you want?',
        choices:['Triangle','Square','Circle'],
        name:'Shape-select'
    }
]


function init() {

    console.log("Hello and welcome to the README Generator!");
    console.log("Let's get started...");

    inquirer.prompt(questions)// inquirer.prompt holds question

        .then((answers) => { 
            const markdown = generateMarkdown(answers); // answers come back from generateMarkdown
            writeToFile('README.md', markdown); //Finally creates a README with answers inside
        })

        .catch((error) => {
            if (error) {
                console.log("Error caught: " + error);
            } else {
                console.log("Another type of error: perhaps did not answer questions correctly");
            }
        });

}

init();

module.exports = question;