
const Collective = require('./collective.js');
const ShapeItem = require('./shapes.js');

class Square extends ShapeItem {
    constructor(Shapeselect) {
        super(Shapeselect)
        this.name = 'Square';
    }
        render() {
            `<rect
            x ="50" y="50"
            width="20" height="20" stroke-width="0" `
    }
}

module.exports = Square;