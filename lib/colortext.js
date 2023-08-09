

const TextItem = require("./text.js");

class ColorTextItem extends TextItem {
    constructor(hexadecimaltext) {
        super();
        this.hexadecimaltext = hexadecimaltext;
    }   

    render() {
        return `fill="${this.hexadecimaltext ? "#" : ""} ${this.ColorTextselect}"/>`
    }
}

module.exports = ColorTextItem;