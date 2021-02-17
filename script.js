'use strict';

let random = generateRandomNumber();
console.log('Random Number = ' + random);
let score = 25;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function() 
{
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if(!guess)
    {
        document.querySelector('.message').textContent = 'No number entered!';
    }
    else if(guess === random)
    {
        document.querySelector('.number').textContent = guess;
        document.querySelector('.message').textContent = 'You win!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '40rem';

        if(score > highScore)
        {
            highScore = score;
            document.querySelector('.highscore').textContent = score;
        }
    }
    else if(guess !== random)
    {
        if(score > 1)
        {
        document.querySelector('.number').textContent = guess;
        document.querySelector('.message').textContent = guess > random ? 'Too high!' : 'Too low!';
        score--;
        document.querySelector('.score').textContent = score;
        }
        else
        {
            document.querySelector('.message').textContent = 'You lose!';
        }
    }
})

document.querySelector('.again').addEventListener('click', function() {
    random = generateRandomNumber();
    console.log('Random Number = ' + random);
    score = 25;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})

function generateRandomNumber()
{
    return Math.floor(Math.random() * 50) + 1;
}


