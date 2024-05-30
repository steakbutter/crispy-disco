const Shape = require('../lib/shapes');

class Square extends Shape {
    render() {
        return `<svg version="1.1"
       width="300" height="200"
       xmlns="http://www.w3.org/2000/svg">
  
    <rect width="100%" height="100%" fill="white" />
   
    <rect x="10" y="10" width= "30" height="30" fill="${this.shapeColor}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  
  </svg>
       `
    }
}

module.exports = Square;