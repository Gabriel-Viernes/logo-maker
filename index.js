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
            message: 'Please enter your desired logo text color in hexadecimal',
            name:'textColor'
        },
        {
            type: 'input',
            message: 'Please enter your desired logo background color in hexadecimal',
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
        switch (answers.shape) {
            case 'square':
                let tempSquare = new shape.Square(answers.backColor, answers.textColor, answers.logoChar.toUpperCase())
                fs.writeFileSync('./examples/example.svg', tempSquare.render(), (err) => {
                    if(err) {
                        console.debug(err)
                    }
                } )
                break;
            case 'triangle':
                let tempTri = new shape.Triangle(answers.backColor, answers.textColor,answers.logoChar.toUpperCase())
                fs.writeFile('./examples/example.svg', tempTri.render(), (err) => {
                    if(err) {
                        console.debug(err)
                    }
                })
                break;
            case 'circle':
                let tempCir = new shape.Circle(answers.backColor, answers.textColor, answers.logoChar.toUpperCase())
                fs.writeFile('./examples/example.svg', tempCir.render(), (err) => {
                    if(err) {
                        console.debug(err)
                    }
                })
                break;
        }
    })
}
getInfo()