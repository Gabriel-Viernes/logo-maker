const inquirer = require("inquirer");
function getInfo() {
    let answers = inquirer.prompt([
        {
            type: 'input',
            message: 'Pleae enter three characters for your project logo',
            name: 'logoChar'
        },
        {
            type: 'input',
            message: 'Please enter your desired logo color in hexadecimal',
            name:'color'
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
    ]).then()
}