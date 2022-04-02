let RGB;
let answerCorrect;
let score = 0;
const rgbColorElement = document.querySelector('#rgb-color');
const balls = document.querySelectorAll('.ball');
const answerElement = document.querySelector('#answer');
const resetGame = document.querySelector('#reset-game');
const scoreElement = document.querySelector('#score');

function randomNumber(max) {
  return Number((Math.random() * max));
}

function randomNumberToFixed(max) {
  return randomNumber(max).toFixed();
}

function randomNumberFloor(max) {
  return Math.floor(randomNumber(max));
}

function generateRandomColor() {
  return `(${randomNumberToFixed(255)}, ${randomNumberToFixed(255)}, ${randomNumberToFixed(255)})`;
}

function createCircles() {
  answerCorrect = randomNumberFloor(balls.length);
  console.log(`Bola correta: ${answerCorrect + 1} ${RGB}`);
  for (let index = 0; index < balls.length; index += 1) {
    const circle = balls[index];
    if (answerCorrect === index) {
      circle.style.backgroundColor = `RGB${RGB}`;
    } else {
      circle.style.backgroundColor = `RGB${generateRandomColor()}`;
    }
  }
}

function onClickBallEvent({ target: { style: { backgroundColor } } }) {
  if (backgroundColor === `rgb${RGB}`) {
    answerElement.textContent = 'Acertou!';
    score += 3;
    scoreElement.textContent = score;
    return;
  }
  answerElement.textContent = 'Errou! Tente novamente!';
}

function init() {
  RGB = generateRandomColor();
  rgbColorElement.textContent = RGB;
  createCircles();
}

function onClickResetGameButtonEvent() {
  init();
  answerElement.textContent = 'Escolha uma cor';
}

window.onload = () => {
  init();
  for (let index = 0; index < balls.length; index += 1) {
    const ball = balls[index];
    ball.addEventListener('click', onClickBallEvent);
  }
  resetGame.addEventListener('click', onClickResetGameButtonEvent);
};
