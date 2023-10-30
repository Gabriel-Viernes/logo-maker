// Superclass that contains properties needed for all of the shapes
class Shape {
    constructor(backColor, textColor, text) {
        this.backColor = backColor;
        this.text = text;
        this.textColor = textColor
    }
}

class Triangle extends Shape {
    constructor(backColor, textColor, text) {
        super(backColor, textColor, text)
    }
    render() {
        return `<?xml version="1.0" standalone="no"?>
<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <style>
        .shape {
            fill: #${this.backColor};
        }
        .text {
            font: 3.5em sans-serif;
            fill: #${this.textColor};
            text-anchor: middle;
            dominant-baseline: middle;
        }
    </style>
    <polygon points = '50 200 250 200 150 0' class = 'shape'/>
    <text x = '50%' y = '70%' class = 'text'>${this.text}</text>
</svg>`
    }
}

class Square extends Shape {
    constructor(backColor, textColor, text) {
        super(backColor, textColor, text)
    }
    render() {
        return `<?xml version="1.0" standalone="no"?>
<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <style>
        .shape {
            fill: #${this.backColor};
        }
        .text {
            font: 4em sans-serif;
            fill: #${this.textColor};
            text-anchor: middle;
            dominant-baseline: middle;
        }
    </style>
    <rect x = '50' y = '0' width = '200' height = '200' class = 'shape'/>
    <text x = '50%' y = '50%' class = 'text'>${this.text}</text>
</svg>`
    }
}

class Circle extends Shape {
    constructor(backColor, textColor, text) {
        super(backColor, textColor, text)
    }
    render() {
        return `<?xml version="1.0" standalone="no"?>
<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <style>
        .shape {
            fill: #${this.backColor};
        }
        .text {
            font: 4em sans-serif;
            fill: #${this.textColor};
            text-anchor: middle;
            dominant-baseline: middle;
        }
    </style>
    <circle cx = '150' cy = '100' r = '99' class = 'shape'/>
    <text x = '50%' y = '50%' class = 'text'>${this.text}</text>
</svg>`
    }
}

module.exports = {
    Triangle, 
    Circle, 
    Square
}