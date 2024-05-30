const Shape = require('../lib/shapes');

class Triangle extends Shape {
    render() {
        `<polygon points="150, 18 244, 182 56, 182" fill="blue" />`
    }
}

module.exports = Triangle;