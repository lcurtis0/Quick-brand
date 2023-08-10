

const TextItem = require("./text.js");

class ColorTextItem extends TextItem {
    constructor(hexadecimaltext) {
        this.hexadecimaltext = hexadecimaltext;
        this.Textcolorselect = Textcolorselect;
    }

    render() {
        return `fill="${this.hexadecimaltext ? "#" : ""} ${this.ColorTextselect}"/>`
    }
}

module.exports = ColorTextItem;