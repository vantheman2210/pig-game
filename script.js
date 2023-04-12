'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
const scores = [ 0, 0 ];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

// Function for switching players (DRY principle)
const switchPlayer = function() {
	document.getElementById(`current--${activePlayer}`).textContent = 0;
	currentScore = 0;
	activePlayer = activePlayer === 0 ? 1 : 0;
	player0El.classList.toggle('player--active');
	player1El.classList.toggle('player--active');
};

//Function for resetting a game
const newGame = function() {
	score0El.textContent = 0;
	score1El.textContent = 0;
	currentScore0El.textContent = 0;
	currentScore1El.textContent = 0;
	diceEl.classList.add('hidden');
	scores[0] = 0;
	scores[1] = 0;
	currentScore = 0;
	playing = true;
	activePlayer = 0;
	player0El.classList.add('player--active');
	player1El.classList.remove('player--active');
	player0El.classList.remove('player--winner');
	player1El.classList.remove('player--winner');
};
// Rolling dice functionality
btnRoll.addEventListener('click', () => {
	if (playing) {
		// Generate random dice roll
		const dice = Math.trunc(Math.random(0) * 6) + 1;
		// Display dice
		diceEl.classList.remove('hidden');
		diceEl.src = `./images/dice-${dice}.png`;
		// Check for rolled 1, if true switch
		if (dice !== 1) {
			currentScore += dice;
			document.getElementById(`current--${activePlayer}`).textContent = currentScore;
		} else {
			// switch to next player
			switchPlayer();
		}
	}
});

btnHold.addEventListener('click', () => {
	if (playing) {
		console.log('Hold');
		// Add current score to active player score
		scores[activePlayer] += currentScore;
		document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

		// check if player score is >= 100
		if (scores[activePlayer] >= 10) {
			// End game
			playing = false;
			diceEl.classList.add('hidden');
			document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
			document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
		} else {
			//Switch to next player
			switchPlayer();
		}
	}
});

btnNew.addEventListener('click', newGame);
