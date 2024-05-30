const Shape = require('../lib/shapes');

class Circle extends Shape {
    render() {
        `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`
    }
}

module.exports = Circle;