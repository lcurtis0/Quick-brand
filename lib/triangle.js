const ShapeItem = require("./shapes");


class Triangle extends ShapeItem {
    constructor(Shapeselect) {
        super(Shapeselect)
    }
        render() {
            if (this.Shapeselect === 'Square'){
            `<polygon
            points="850,75  958,137.5 958,262.5"
        width="20" height="20" stroke-width="0" `
            }
    }
}

module.exports = Triangle;


