

const Collective = require("./collective.js");

class ColorItem extends Collective{
    constructor(children, hexadecimal){
        super(children);
        this.hexadecimal = hexadecimal;
    }

    render(){
        return `fill="${this.hexadecimal ? "#" : ""} ${answers.Color-select}"/>`
    }
    }









