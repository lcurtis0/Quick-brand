

const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');

const { Square } = require('./square.js');
const { Circle } = require('./circle.js');
const { Triangle } = require('./triangle.js');

const { ColorTextItem } = require('./colortext.js');

class CLI {
  constructor() {
    this.Text = [];
    this.Shapeselect = [];
  }

  textFunction() {

    console.log("Hello and welcome to the svg logo Generator!");
    console.log("Let's get started...");

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
      ])
      .then(({ Hexidecimaltext, Textcolorselect, Text }) => {
        this.Text.push = `${Hexidecimaltext, Textcolorselect, Text}`;
        return this.textFunction();
      })
    }

  shapeFunction() {
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
          message: 'what shape do you want?',
          choices: ['Square', 'Circle', 'Triangle'],
          name: 'ShapeChoice'
        }
      ])
      .then(({ Hexidecimalshape, Shapecolor, Shapeselect }) => {
        this.Shapeselect.push = `${Hexidecimalshape, Textcolorselect}`;
        if (ShapeChoice === 'Square') {
          this.Shapeselect.push = `${Square.render()}`;
        } else if (ShapeChoice === 'Circle') {
          this.Shapeselect.push = `${Circle.render()}`;
        } else if (ShapeChoice === 'Triangle') {
          this.Shapeselect.push = `${Triangle.render()}`;
        }
        return this.shapeFunction();
      })
      .then((answers) => { return writeFile(join(), 'logo.svg', createDocument(this.ShapeItem, this.TextItem)) })
      .then((answers) => console.log('Congrats your svg file has been created!'))
      .catch((err) => {
        console.log('An error has occured.' + err);
      });
  }

}

module.exports = CLI;


