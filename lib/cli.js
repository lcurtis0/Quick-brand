
  
const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');

const TextItem = require('./lib/text.js');
const ShapeItem = require('./lib/shapes.js');
const Square = require('./lib/square.js');

class Creation {
  constructor() {

    this.ShapeItem = [];
    this.TextItem = [];
  }
  textFunction(){
    return inquirer
    .prompt([
      {
        type: 'confirm',
        message: 'Is the color of your text a Hexidecimal number?',
        name: 'Hexidecimaltext'
      },
      {
        type: 'input',
        message: 'What color do you want your text?',
        name: 'Textcolorselect'
      },
      {
        type: 'input',
        message: 'What do you want the text to say?',
        name: 'Text'
      }
      .then(({ Hexidecimaltext, Textcolorselect, Text }) => {
        this.TextItem.push = `${Hexidecimaltext, Textcolorselect, Text}`;
        return this.textFunction();
      }),
    ])
  }

shapeFunction(){
  return inquirer
  .prompt([
    {
      type: 'confirm',
      message: 'Is the color of your shape a Hexidecimal number?',
      name: 'Hexidecimalshape'
    },
    {
      type: 'input',
      message: 'What color do you want your shape?',
      name: 'Shapecolor'
    },
    {
      type: 'list',
      message: 'what color do you want?',
      choices: ['Square', 'Circle', 'Triangle'],
      name: 'Shapeselect'
    }
    .then(({ Hexidecimalshape, Shapecolor, Shapeselect }) => {
      this.ShapeItem.push = `${Hexidecimalshape, Textcolorselect}`;
      if (Shapeselect === 'Square'){
        this.ShapeItem.push = `${Square.render()}`;
      } else if (Shapeselect === 'Circle'){
        this.ShapeItem.push = `${Square.render()}`;
      } else if (Shapeselect === 'Triangle'){
        this.ShapeItem.push = `${Square.render()}`;
      }
    })
  ])
  .then((answers)=> {return writeFile(join(),'logo.svg', createDocument(this.ShapeItem, this.TextItem))})
  .then((answers) => console.log('Congrats your svg file has been created!'))
.catch((err) => {
console.log('An error has occured.' + err);
});
}

}   


console.log("Hello and welcome to the svg logo Generator!");
console.log("Let's get started...");

inquirer.prompt(questions)

  .catch((error) => {
    if (error) {
      console.log("Error caught: " + error);
    } else {
      console.log("Another type of error: perhaps did not answer questions correctly");
    }
  });

