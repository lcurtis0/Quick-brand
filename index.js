
const inquirer = require('inquirer');
const fs = require("fs/promises");
const { join } = require('path');
const { writeFile } = require('fs/promises');

const TextItem = require('./lib/text.js');
const ShapeItem = require('./lib/shapes.js');
const ColorItem = require('./lib/color.js');
const Square = require('./lib/square.js');
const ColorTextItem = require('./lib/colortext.js');

class Creation {
  constructor() {

    this.finalText = '';
  }
  render() {
    return ``
  }
}

const questions = [
  {
    type: 'confirm',
    message: 'Is your color text select a Hexidecimal number?',
    name: 'Hexidecimaltext'
  }
  .then(({ Hexidecimaltext }) => {
    this.hexdecimal = `${Hexidecimaltext}`;
    return this.addTask();
  }),
  {
    type: 'input',
    message: 'What color do you want your text?',
    name: 'Textcolorselect'
  },
  {
    type: 'confirm',
    message: 'Is your color select a Hexidecimal number?',
    name: 'Hexidecimalshape'
  }
  .then(({ Hexidecimalshape }) => {
    this.hexdecimal = `${Hexidecimalshape}`;
    return this.addTask();
  }),
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

    if (Collective.Shapeselect === 'Square') {
      const newShape = new Square(ColorItem);
    }

    if (Collective.Shapeselect === 'Circle') {
      const newShape = new Circle(ColorItem);
    }

    if (Collective.Shapeselect === 'Triangle') {
      const newShape = new Triangle(ColorItem);
    }
  })

  .catch((error) => {
    if (error) {
      console.log("Error caught: " + error);
    } else {
      console.log("Another type of error: perhaps did not answer questions correctly");
    }
  });

function createDocument(text, color, ) {
  const newtext = new text();
  const newcolor = new color();
  const Collective = items.map(items => {
    return new Collective([items.textItem], items.hexdecimal);
  })

  return `<svg viewbox="0 0 200 300">

    <svg viewBox="0 0 1200 400"
     xmlns="http://www.w3.org/2000/svg" version="1.1">

    ${text.render()}

    ${shape.render()}
    ${color.render()}


    </svg>
    `;
}





