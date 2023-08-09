
const Collective = require("./collective.js");

class ShapeItem {
    constructor(Shapeselect =[], Colorselect =[]) {
        this.Shapeselect = Shapeselect;
        this.Colorselect = Colorselect;
    }
    
    render() {
        `<svg width="12cm" height="4cm" viewBox="0 0 1200 400"
        xmlns="http://www.w3.org/2000/svg" version="1.1">
        
        ${this.Shapeselect}${this.Colorselect}`
    }
}


module.exports = ShapeItem;


