

class TextItem {
    constructor(ColorTextselect = []) {
        this.ColorTextselect = ColorTextselect;
        this.text = text;

        if (this.text > 3) {
            throw new Error('Please enter three or less characters');
        };

    }

    render() {
        return `<text x="120" y="135" text-anchor="middle" fill="${this.ColorTextItem}">${this.text}</text>`;
    }
}

module.exports = TextItem;

