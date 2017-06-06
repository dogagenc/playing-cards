export default class Player {
	constructor(name = null) {
		this.name = name;

		this.reset = this.init;

		this.init();
	}

	init() {
		this.cards = [];

		return this.cards;
	}

	drawFrom(deck, amount = 1) {
		if (!deck || !deck.draw) {
			throw new Error('A deck must be provided!');
		}

		const drawn = deck.draw(amount);

		this.cards = [...drawn, ...this.cards];

		return drawn;
	}
}
