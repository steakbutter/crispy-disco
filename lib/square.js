const Shape = require('../lib/shapes');

class Square extends Shape {
    render() {
        return `<rect x="10" y="10" width= "30" height="30" fill="${this.color}" />`
     }
    }


module.exports = Square;
