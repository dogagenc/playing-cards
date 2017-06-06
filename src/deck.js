export default class Deck {
	constructor(options = {}) {
		const defaultOptions = { jokers: 0 };

		this.opts = { ...defaultOptions, ...options };

		this.draw = this.moveTo.bind(this, 'held');
		this.drawToDiscard = this.moveTo.bind(this, 'discard');
		this.reset = this.initPiles;

		this.initPiles();
	}

	initPiles() {
		this.held = [];
		this.discard = [];
		this.cards = this.createDeck();

		return this.cards;
	}

	moveTo(pile, amount = 1) {
		if (amount < 1) {
			return [];
		}

		const moved = this.cards.slice(0, amount);

		this.cards.splice(0, amount);
		this[pile] = [...moved, ...this[pile]];

		return moved;
	}

	createDeck() {
		const suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
		const names = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
		const deck = [];

		suits.map(suit => names.map(name => deck.push({ suit, name })));

		if (this.opts.jokers) {
			for (let i = this.opts.jokers; i; i -= 1) {
				deck.push({ joker: true });
			}
		}

		return deck;
	}

	shuffle() {
		for (let i = this.cards.length; i; i -= 1) {
			const random = Math.floor(Math.random() * i);

			[this.cards[i - 1], this.cards[random]] = [this.cards[random], this.cards[i - 1]];
		}

		return this.cards;
	}
}
