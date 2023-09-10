'use strict';
/*
console.log(document.querySelector('.message').textContent );
document.querySelector('.message').textContent = 'correct number'; 

document.querySelector('.number').textContent= 13;
document.querySelector('.score').textContent= 20;

console.log(document.querySelector('.guess').value);//konsola yazdirsam bos satir gorurum cunku deger girilmedi.

document.querySelector('.guess').value=23;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1; //1 dahil 20 haric old icin +1 diyerek 20 de dahil ettim
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); //number diyerek girdinin tipini degistirdik
  console.log(guess, typeof guess);

  //when theres no input
  if (!guess) {
    // document.querySelector('.message').textContent = '🔢 Enter a number...';
    displayMessage('🔢 Enter a number...');
    //if player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '😎 You found it dude!!';
    displayMessage('😎 You found it dude!!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? '🔽 Decrease it!' : '🔼 Increase it!';
      displayMessage(
        guess > secretNumber ? '🔽 Decrease it!' : '🔼 Increase it!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '🤦🏻‍♂️ You lost... What a loser!';
      document.querySelector('.score').textContent = 0;
    }
  }
  /* //when guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🔽 Decrease it!';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🤦🏻‍♂️ You lost... What a loser!';
      document.querySelector('.score').textContent = 0;
    }

    //when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🔼 Increase it!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🤦🏻‍♂️ You lost... What a loser!';
      document.querySelector('.score').textContent = 0;
    }
  } //sayi girilmemis ise degerini 0 yapar ve 0 da false demektir. ama ben bu if/else calistirmak icin true istiyorum ondan oturu istedigim true sonucunu alabilmek icin basina unlem koydum. yani degilinin degili gibi oldu
*/
}); //input alanindan girilen cogu bilgi string olarak islenir

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
