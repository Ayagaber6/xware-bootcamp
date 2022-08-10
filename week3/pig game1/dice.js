"use strict!";

let score1=document.querySelector('.score--0');
let score2=document.querySelector('.score--1');
let name1=document.querySelector('.name--0');
let name2=document.querySelector('.name--1');
let dice=document.querySelector('.dice-img');
dice.classList.add('hidden');
let current1=document.querySelector('.current--0');
let current2=document.querySelector('.current--1');
score1.textContent=0;
score2.textContent=0;
let player1=document.querySelector('.player--0');
let player2=document.querySelector('.player--1');
let DicePlace=document.querySelector('.dice');
let scores=[0,0];
let current=0;
let activePlayer=0;
let switchPlayer = function()
{
    current=0;
    document.querySelector(`.current--${activePlayer}`).textContent = current;
    activePlayer = activePlayer===0? 1:0;
    player1.classList.toggle('active');
    player2.classList.toggle('active');
}

let hold=document.querySelector('.hold');
let roll=document.querySelector('.roll');
let NewGame=document.getElementById('new-game-btn');

roll.addEventListener('click',function(){
    DicePlace.classList.remove('hidden');
    const diceNumber =Math.trunc(Math.random()*6)+1;
    dice.classList.remove('hidden');
    dice.src=`dice-${diceNumber}.png`;
    if(diceNumber!=1)
    {
        current+=diceNumber;
        document.querySelector(`.current--${activePlayer}`).textContent = current;
    }
    else
    {
        switchPlayer();
    }
})

hold.addEventListener('click',function(){
    scores[activePlayer]+= current;
    document.querySelector(`.score--${activePlayer}`).textContent=scores[activePlayer];

    if(scores[activePlayer]>=100)
    {
        document.querySelector(`.player--${activePlayer}`).classList.add('winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('active');
        document.querySelector(`.name--${activePlayer}`).textContent='Winner';
        roll.classList.add('hidden');
        hold.classList.add('hidden');
    }   
    else
    {
        switchPlayer();
    }

})

NewGame.addEventListener('click',function(){
        score1.textContent=0;
        score2.textContent=0;
        current1.textContent=0;
        current2.textContent=0;
        name1.textContent="Player 1";
        name2.textContent="Player 2";
        player1.classList.remove('winner');
        player2.classList.remove('winner');
        player1.classList.add('active');
        player2.classList.remove('active');
        DicePlace.classList.add('hidden');
        roll.classList.remove('hidden');
        hold.classList.remove('hidden');
        scores=[0,0];
        current=0;
        activePlayer=0;
})