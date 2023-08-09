
const ShapeItem = require('./shapes.js');

class Circle extends ShapeItem {
    constructor(Shapeselect) {
        super(Shapeselect)
    }
        render() {
            if (this.Shapeselect === 'Square'){
            `<circle cx="600" cy="200" r="100"
        width="20" height="20" `
            }
    }
}

module.exports = Circle;

