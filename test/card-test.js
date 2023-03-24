var assert = require("chai").assert
var Card = require("../lib/card.js")

describe("Card", function () {
    it("should be a function", function () {
        assert.isFunction(Card)
    })

    it("should have a suit", function () {
        var card = new Card('hearts')
        assert.equal(card.suit, 'hearts')
    })
    it("should have a value", function () {
        var card = new Card('hearts', 3)
        assert.equal(card.value, 3)
    })
    it("should have a rank", function () {
        var card = new Card('hearts', 3, 2)
        assert.equal(card.rank, 2)
    })
})
