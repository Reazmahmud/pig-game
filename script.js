'use strict';
// selecting element
const score0El = document.querySelector(`#score--0`);
const score1El = document.querySelector(`#score--1`);
const diceEl = document.querySelector(`.dice`);
const btnRoll = document.querySelector(`.btn--roll`);
const current0El = document.querySelector(`#current--0`);
const current1El = document.querySelector(`#current--1`);
const player0El = document.querySelector(`.player--0`);
const player1El = document.querySelector(`.player--1`);
const btnHold = document.querySelector(`.btn--hold`);
const btnNew = document.querySelector(`.btn--new`);

// start condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add(`hidden`);
let currentPlayer = 0;
let currentScore = 0;
let score = [0, 0];
let play = true;


// Start Roll dice logic
const switchPlayer = () => {
    // switch player
    document.querySelector(`#current--${currentPlayer}`).textContent = 0;
    currentScore = 0;
    if (currentPlayer === 0) {
        currentPlayer = 1;
    } else {
        currentPlayer = 0;
    }
    player0El.classList.toggle(`player--active`);
    player1El.classList.toggle(`player--active`);
}

btnRoll.addEventListener('click', function () {

    if (play) {
        const dice = Math.trunc(Math.random() * 6 + 1);
        diceEl.classList.remove(`hidden`);
        diceEl.src = `dice-${dice}.png`;

        if (dice !== 1) {
            currentScore += dice;
            document.querySelector(`#current--${currentPlayer}`).textContent = currentScore;
        } else {
            switchPlayer();

        }
    }
});

btnHold.addEventListener('click', function () {



    if (play) {
        score[currentPlayer] += currentScore;
        document.querySelector(`#score--${currentPlayer}`).textContent = score[currentPlayer];
        if (score[currentPlayer] >= 20) {
            play = false;
            document.querySelector(`.player--${currentPlayer}`).classList.add('player--winner');
            diceEl.classList.add(`hidden`);

        }
        else {
            switchPlayer();
        }
    }


});


btnNew.addEventListener('click', function () {
    score = [0, 0]
    currentScore = 0;
    currentPlayer = 0;
    score[currentPlayer] = currentScore;
    current0El.textContent = 0;
    current1El.textContent = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
    diceEl.classList.add(`hidden`);
    play = true;
    player0El.classList.add(`player--active`);
    player1El.classList.remove(`player--active`);
    player0El.classList.remove(`player--winner`);
    player1El.classList.remove(`player--winner`);

})