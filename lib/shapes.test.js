const Triangle = require('../lib/triangle');

describe('Triangle', () => {
    it("should verify if the shape is a triangle", () =>{
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        
    } )
})
