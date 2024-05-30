const Shape = require('../lib/shapes');

class Square extends Shape {
    render() {
        `<rect x="10" y="10" width= "30" height="30" fill="${this.shapeColor}" />`
    }
}

module.exports = Square;