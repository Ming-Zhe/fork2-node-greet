// var expect = require("chai").expect;
var greet = require("../lib/index");

describe('greet', function(){ // Have no idea which function should been used here.
    it("should greet a person by name", function(){
        expect(greet('name')).to.have.length.above(7);
    });
    it("should greet a person flirtatiously if drunk", function(){
        expect(greet('name', 'drunk')).to.have.length.above(7);
    });
});