import test from 'ava';
import { Deck } from '../lib';

const DECK_LENGTH = 52;
const deck = new Deck();

function checkInitialDeck(t) {
	const randomNumber = Math.floor(Math.random() * 10);

	t.is(deck.cards.length, DECK_LENGTH);
	t.is(deck.cards[randomNumber].name, (randomNumber + 1).toString());
	t.is(deck.cards[randomNumber].suit, 'Hearts');
}

test('new Deck()', checkInitialDeck);

test('new Deck([options])', t => {
	const JOKER_COUNT = Math.floor(Math.random() * 10);

	const newDeck = new Deck({ jokers: JOKER_COUNT });

	t.is(newDeck.cards.length, DECK_LENGTH + JOKER_COUNT);
	t.is(newDeck.cards.filter(card => card.joker).length, JOKER_COUNT);
});

test('Deck.shuffle()', t => {
	const newDeck = new Deck();

	newDeck.shuffle();

	t.notDeepEqual(deck.cards, newDeck.cards);
});

test('Deck.draw()', t => {
	const randomNumber = Math.floor(Math.random() * deck.cards.length);
	const drawn = deck.draw(randomNumber);

	t.is(deck.cards.length, DECK_LENGTH - randomNumber);
	t.deepEqual(drawn, deck.held);

	t.is(deck.draw().length, 1);
	t.is(deck.cards.length + randomNumber + 1, DECK_LENGTH);
});

test('Deck.reset()', t => {
	deck.reset();

	checkInitialDeck(t);
});

test('Deck.drawToDiscard()', t => {
	const randomNumber = Math.floor(Math.random() * deck.cards.length);
	const discard = deck.drawToDiscard(randomNumber);

	t.is(deck.cards.length, DECK_LENGTH - randomNumber);
	t.deepEqual(discard, deck.discard);

	t.is(deck.drawToDiscard().length, 1);
	t.is(deck.cards.length + randomNumber + 1, DECK_LENGTH);
});
