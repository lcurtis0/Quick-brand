
const Collective = require("./collective.js");

class TextItem extends Collective{
    constructor(children){

        this.children = children;

        if (answers.text > 3) {
            throw new Error('Please enter three or less characters');
          };
    }
    render(){
        return `<text x="20" y="35" class="small">${answers.text}</text>`;
}
}

module.exports = text;