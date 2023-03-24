var assert = require("chai").assert
var Deck = require("../lib/deck.js")
var Card = require("../lib/card.js")

describe("Deck", function () {
    it("should be a function", function () {
        assert.isFunction(Deck)
    })

    it("should have an array of cards", function () {
        var card1 = new Card("hearts", "2", 1)
        var card2 = new Card("clubs", "3", 2)
        var card3 = new Card("diamonds", "Jack", 11)
        var cards = [card1, card2, card3]

        var deck = new Deck(cards)
        assert.equal(deck.cards, cards)
        assert.equal(deck.cards.length, 3)
    })
})
