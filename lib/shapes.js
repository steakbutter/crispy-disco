class Shape {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor

    }
    setColor(shapeColor){
        this.shapeColor = shapeColor;
    }
}

module.exports = Shape;


