

const Collective = require("./collective.js");
const ShapeItem = require("./shapes.js");

class Color extends ShapeItem {
    constructor(hexadecimal) {
        super(Colorselect);
        this.hexadecimal = hexadecimal;
    }

    render() {
        return `fill="${this.hexadecimal ? "#" : ""} ${this.Colorselect}"/>`
    }
}

module.exports = Color;








