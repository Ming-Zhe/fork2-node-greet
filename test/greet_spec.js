// var expect = require("chai").expect;
var greet = require("greet");

describe('greet', function(){
    it("should greet a person by name", function(){
        expect(greet('name', 'drunk')).to.have.length.above(7);
    });
    it("should greet a person flirtatiously if drunk", function(){
        expect(greet('name', 'drunk')).to.have.length.above(7);
    });
});