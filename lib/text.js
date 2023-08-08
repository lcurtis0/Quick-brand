
const Collective = require("./collective.js");

class TextItem extends Collective{
    constructor(ColorTextItem){
        super(ColorTextItem)
        this.ColorTextselect = [];
        this.text = text;

        if (this.text > 3) {
            throw new Error('Please enter three or less characters');
          };

          addtextcolor(Shapeselect){
            this.Shapeselect.push(ColorText)
        }
    }
    render(){
        return `<text x="120" y="135" text-anchor="middle" fill="${this.ColorTextItem}">${this.text}</text>`;
}
}

module.exports = TextItem;

