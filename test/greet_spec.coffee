greet = require("../src/index")
describe "greet", ->
  it "should greet a person by name", ->
    expect(greet("name")).to.have.length.above 7
    return

  it "should greet a person flirtatiously if drunk", ->
    expect(greet("name", "drunk")).to.have.length.above 7
    return

  return