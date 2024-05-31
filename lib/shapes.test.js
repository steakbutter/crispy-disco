const Triangle = require('../lib/triangle');
//const Square = require('../lib/square');

describe('Triangle', () => {
    it("should verify if the shape is a triangle and shape color is blue", () =>{
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        
    } )
})

const Circle = require('../lib/circle');

describe('Circle', () => {
    it("should verify if the shape is a circle and shape color is blue", () =>{
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
        
    } )
})