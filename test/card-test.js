var expect = require("chai").expect
var Card = require("../lib/card.js")

describe("Card", function () {
    it("should be a function", function () {
      expect(Card).to.be.a('function')
    })

    it("should have a suit", function () {
        var card = new Card('hearts')
        expect(card.suit).to.eq('hearts')
    })
    it("should have a value", function () {
        var card = new Card('hearts', 3)
        expect(card.value).to.eq(3)
    })
    it("should have a rank", function () {
        var card = new Card('hearts', 3, 2)
        expect(card.rank).to.eq(2)
    })
})
