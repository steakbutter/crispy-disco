const inquirer = require('inquirer');

inquirer
.prompt([
    {
        type: 'input',
        name: 'text' ,
        message: 'Please enter 3 letter text',
    },
    {
        type: 'color',
        name: 'textColor',
        message: 'Enter text color',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'choose a shape',
        choices: ['triangle', 'square', 'circle'],
    },
    {
        type: 'color',
        name: 'shapeColor',
        message: 'Enter shape color',
    }, 
    
])
.then((response) =>
    console.log((`Your favorite color is ${response.textColor}!`))
  );