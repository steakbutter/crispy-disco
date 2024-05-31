const inquirer = require('inquirer');
const fs = require('fs');
const Triangle = require('./lib/triangle')
const Svg = require('./lib/svg')
// const Square = require('../crispy-disco/lib/square')
const renderSvg = ({ text, textColor, shape }) => 
    
    `<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">

<rect width="100%" height="100%" fill="white" />

${shape.render()}
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>
`;

   


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
        type: 'input',
        name: 'textColor',
        message: 'Enter text color',
        validate: function(input) {
            const colorOption = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$|^red$|^blue$|^green$|^yellow$|^white$|^black$|^cyan$|^magenta$/;
            if (colorOption.test(input)) {
                return true;
            } else {
                return 'Enter a valid color keyword or hexadecimal number'
            }
        }
    },
    {
        type: 'list',
        name: 'shape',
        message: 'choose a shape',
        choices: ['triangle', 'square', 'circle'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color',
        validate: function(input) {
            const colorOption = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$|^red$|^blue$|^green$|^yellow$|^white$|^black$|^cyan$|^magenta$/;
            if (colorOption.test(input)) {
                return true;
            } else {
                return 'Enter a valid color keyword or hexadecimal number'
            }
        }
    }, 
    
])
.then((data) => { 
    let shape;
    if(data.shape === 'triangle'){
        shape = new Triangle();
        shape.setColor(data.shapeColor)
    } console.log(shape);
    const svg = new Svg();
    svg.setText(data.textColor, data.text);
    svg.setShape(shape);

    fs.writeFile('Logo.svg', svg, (err) =>
    err ? console.log(err) : console.log('Generated Logo.svg'));
    
}
);