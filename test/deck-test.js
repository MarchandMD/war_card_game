var expect = require("chai").expect
var Deck = require("../lib/deck.js")
var Card = require("../lib/card.js")

describe("Deck", function () {

    let cards = null;
    let deck = null;

    beforeEach(function () {
        var card1 = new Card("hearts", "2", 1)
        var card2 = new Card("clubs", "3", 2)
        var card3 = new Card("diamonds", "Jack", 11)
        cards = [card1, card2, card3];
        deck = new Deck(cards);
    })

    it("should be a function", function () {
        expect(Deck).to.be.a("function")
    })

    it("should have an array of cards", function () {
        expect(deck.cards).to.eq(cards)
        expect(deck.cards.length).to.eq(3)
    })

    it("should be able to retrieve #rankOfCardAt", function () {
        var card1 = new Card("hearts", "2", 1)
        var cards = [card1]
        var deck = new Deck(cards)

        expect(deck.rankOfCardAt(0)).to.eq(1)
    })

    describe("#highRankingCards", function () {
        it("retrieves cards valued 11 or higher", function () {
            var expected = []
        })
    })
})
