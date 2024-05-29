const inquirer = require('inquirer')

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
    },
    {
        type: 'color',
        name: 'shapeColor',
        message: 'Enter shape color',
    }, 
    
]);