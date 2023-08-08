



const Collective = require("./collective.js");

class ColorTextItem extends Collective {
    constructor(children, hexadecimal) {
        super(children);
        this.hexadecimal = hexadecimal;
        this.Colorselect = Colorselect
    }

    render() {
        return `fill="${this.hexadecimal ? "#" : ""} ${answers.ColorTextselect}"/>`
    }
}

module.exports = ColorTextItem;