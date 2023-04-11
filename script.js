'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Rolling dice functionality
btnRoll.addEventListener('click', () => { 
  // Generate random dice roll
  const dice = Math.trunc(Math.random(0) * 6) + 1;
  // Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `./images/dice-${dice}.png`
  // Check for rolled 1, if true switch
})
