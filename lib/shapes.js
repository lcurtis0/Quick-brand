
const Collective = require("./collective.js");

class ShapeItem extends Collective {
    constructor(Colorselect) {
        this.Shapeselect = [];
        this.Colorselect = [];
    }
        addshapetype(Shapeselect){
            this.Shapeselect.push(Shape)
        }

        addcolor(Colorselect){
            this.Colorselect.push(Color)
        }
    
    render() {
        `<svg width="12cm" height="4cm" viewBox="0 0 1200 400"
        xmlns="http://www.w3.org/2000/svg" version="1.1">`
    }
}


module.exports = ShapeItem;


