const inquirer = require('inquirer');

inquirer
.prompt([
    {
        type: 'input',
        name: 'text' ,
        message: 'Enter 3 letter text',
        validate: function(input) {
            if(input.length === 3) {
                return true; 
            } else {
                return 'No more than 3 letters please';
            }
                
        }
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