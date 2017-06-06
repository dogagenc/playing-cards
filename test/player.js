import test from 'ava';
import { Deck, Player } from '../lib';

const player = new Player();
const deck = new Deck();

const DECK_LENGTH = 52;

test('new Player()', t => {
	t.is(player.cards.length, 0);
});

test('new Player([name])', t => {
	const PLAYER_NAME = 'Hello Player';
	const newPlayer = new Player(PLAYER_NAME);

	t.is(newPlayer.name, PLAYER_NAME);
});

test('drawFrom(deck)', t => {
	player.drawFrom(deck);

	t.is(player.cards.length, 1);
	t.is(deck.cards.length, DECK_LENGTH - 1);
});

test('reset()', t => {
	player.reset();
	deck.reset();

	t.is(player.cards.length, 0);
});

test('drawFrom(deck, [amount])', t => {
	const randomNumber = Math.floor(Math.random() * DECK_LENGTH);

	player.drawFrom(deck, randomNumber);

	t.is(player.cards.length, randomNumber);
	t.is(deck.cards.length, DECK_LENGTH - randomNumber);
});
