const inquirer = require('inquirer');



const questions = [
    {
      type: 'confirm',
      message: 'Is your color text select a Hexidecimal number?',
      name: 'Hexidecimaltext'
    },
    {
      type: 'input',
      message: 'What color do you want your text?',
      name: 'Textcolorselect'
    },
    {
      type: 'confirm',
      message: 'Is your color select a Hexidecimal number?',
      name: 'Hexidecimalshape'
    },
    {
      type: 'input',
      message: 'what color do you want?',
      name: 'Colorselect'
    },
    {
      type: 'list',
      message: 'what color do you want?',
      choices: ['Triangle', 'Square', 'Circle'],
      name: 'Shapeselect'
    }
  ]
  
  
  console.log("Hello and welcome to the svg logo Generator!");
  console.log("Let's get started...");
  
  inquirer.prompt(questions)
  
    .then((answers) => {
      console.log("hello");
      //  const svg = (answers);
      //  writeToFile('logo.svg', svg);
    })
  
    .catch((error) => {
      if (error) {
        console.log("Error caught: " + error);
      } else {
        console.log("Another type of error: perhaps did not answer questions correctly");
      }
    });
  