# Playing Cards for JavaScript

## Install
`npm install playing-cards-js`

## Usage
```js
// Node & AMD
import { Deck, Player } from 'playing-cards-js'; 
const deck = new Deck();

// Browser
const deck = new PlayingCards.Deck();
// deck.cards.length == 52

const card = deck.draw();
// card == [{ suit: 'Hearts', name: '1' }]
// deck.cards.length == 51
// deck.held.length == 1

deck.shuffle();

const cards = deck.draw(4);
// cards == [{ suit: 'Spades', name: 'Q' }, { suit: 'Diamonds', name: '7' }, ...]
// cards.length == 4
// deck.cards.length == 47
// deck.held.length == 5

const cardsToDiscard = deck.drawToDiscard(3);
// cardsToDiscard == [{ suit: 'Clubs', name: '10' }, ...]
// cardsToDiscard.length == 3
// deck.cards.length == 44
// deck.held.length == 8

deck.reset();
// deck.cards.length == 52
// deck.held.length == 0

const deckWithJokers = new Deck({ jokers: 2 });
// deck.cards.length == 54

const player = new Player();
const cardsToPlayer = player.drawFrom(deck, 2);
// cardsToPlayer.length == 2
// player.cards.length == 2
// deck.cards.length == 50

player.reset();
// player.cards.length == 0
```