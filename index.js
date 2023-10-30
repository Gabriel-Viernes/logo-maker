const inquirer = require('inquirer');
const shape = require('./lib/shapes.js')
const fs = require('fs')
function getInfo() {
    let answers = inquirer.prompt([
        {
            type: 'input',
            message: 'Pleae enter three characters for your project logo',
            name: 'logoChar'
        },
        {
            type: 'input',
            message: 'Please enter your desired logo text color in hexadecimal without "#"',
            name:'textColor'
        },
        {
            type: 'input',
            message: 'Please enter your desired logo background color in hexadecimal without "#"',
            name:'backColor'
        },
        {
            type: 'list',
            message: 'What shape would your like your background to be?',
            name:'shape',
            choices: [
                'square',
                'triangle',
                'circle'
            ]
        }
    ]).then((answers) => {
        if(answers.logoChar.length > 3 || answers.logoChar.length < 3) {
            console.log('Please input exactly three letters')
            getInfo()
        }
        let isColor = /^[0-9A-F]{6}$/i
        // ^ - ensures match starts from start of string
        // [0-9A-F] - checks each char whether they match the provided sets
        // {6} - checks whether match is 6 characters long
        // $ - ensures match ends at the end of string
        // i - allows case insensitivity
        if(isColor.test(answers.textColor) === false) {
            console.log('Invalid text color, please enter a valid hexadecimal color without "#"')
            getInfo()
        }
        if(isColor.test(answers.backColor) === false) {
            console.log('Invalid background color, please enter a valid hexadecimal color without "#"')
            getInfo()
        }
        
        switch (answers.shape) {
            case 'square':
                let tempSquare = new shape.Square(answers.backColor, answers.textColor, answers.logoChar.toUpperCase())
                fs.writeFileSync('./examples/logo.svg', tempSquare.render(), (err) => {
                    if(err) {
                        console.debug(err)
                    }
                })
                console.log('Generated logo.svg')
                break;
            case 'triangle':
                let tempTri = new shape.Triangle(answers.backColor, answers.textColor,answers.logoChar.toUpperCase())
                fs.writeFile('./examples/logo.svg', tempTri.render(), (err) => {
                    if(err) {
                        console.debug(err)
                    }
                })
                console.log('Generated logo.svg')
                break;
            case 'circle':
                let tempCir = new shape.Circle(answers.backColor, answers.textColor, answers.logoChar.toUpperCase())
                fs.writeFile('./examples/logo.svg', tempCir.render(), (err) => {
                    if(err) {
                        console.debug(err)
                    }
                })
                console.log('Generated logo.svg')
                break;
        }
    })
}
getInfo()