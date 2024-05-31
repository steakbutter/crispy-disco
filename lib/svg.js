class Svg {
    constructor() {
        this.text = ''
        this.shape = ''
    }
    render() {
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        
        <rect width="100%" height="100%" fill="white" />
        
        ${this.shape}
        ${this.text}
        
        </svg>
        `;
    }
    setText(textColor, text) {
       return ` <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`
    }
    setShape(shape) {
        this.shape = shape.render();
    }
}


module.exports = Svg;