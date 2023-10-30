const shapes = require('./shapes.js')
describe('Checks render() functionality of classes from shapes.js', () => {
    describe('Square class test', () => {
        it('Should return a string of XML that will render a square with the provided parameters', () => {
            let test = new shapes.Square('000000', 'ffffff', 'uuu')
            expect(test.render()).toEqual(`<?xml version="1.0" standalone="no"?>
<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <style>
        .shape {
            fill: #${test.backColor};
        }
        .text {
            font: 4em sans-serif;
            fill: #${test.textColor};
            text-anchor: middle;
            dominant-baseline: middle;
        }
    </style>
    <rect x = '50' y = '0' width = '200' height = '200' class = 'shape'/>
    <text x = '50%' y = '50%' class = 'text'>${test.text}</text>
</svg>`)
        })
    })
    describe('Triangle class test', () => {
        it('Should return a string of XML that will render a triangle with the provided parameters', () => {
            let test = new shapes.Triangle('000000', 'ffffff', 'uuu')
            expect(test.render()).toEqual(`<?xml version="1.0" standalone="no"?>
<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <style>
        .shape {
            fill: #${test.backColor};
        }
        .text {
            font: 3.5em sans-serif;
            fill: #${test.textColor};
            text-anchor: middle;
            dominant-baseline: middle;
        }
    </style>
    <polygon points = '50 200 250 200 150 0' class = 'shape'/>
    <text x = '50%' y = '70%' class = 'text'>${test.text}</text>
</svg>`)
        })
    })
    describe('Circle class test', () => {
        it('Should return a string of XML that will render a circle with the provided parameters', () => {
            let test = new shapes.Circle('000000', 'ffffff', 'uuu')
            expect(test.render()).toEqual(`<?xml version="1.0" standalone="no"?>
<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <style>
        .shape {
            fill: #${test.backColor};
        }
        .text {
            font: 4em sans-serif;
            fill: #${test.textColor};
            text-anchor: middle;
            dominant-baseline: middle;
        }
    </style>
    <circle cx = '150' cy = '100' r = '99' class = 'shape'/>
    <text x = '50%' y = '50%' class = 'text'>${test.text}</text>
</svg>`)
        })
    })
})

