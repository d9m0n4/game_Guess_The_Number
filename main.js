"use strict";

function game() {

  function getRandNum(){
    return Math.floor(Math.random() * 100);
  }

  let secretNum = getRandNum();
  let counter = 10;

  function stopGame() {
    alert('Игра окончена!!!');
  }

  function count(){
    counter--;
    if (counter === 0) {
      if (confirm('Попытки закончились, хотите сыграть еще?')){
        game();
      }else{
        stopGame();
      }
    }
  }
  
  function startGame() {
    let questionNum = +prompt('Введите число');
     if (questionNum <= null) {
      alert('Выход из игры!!!');
      return;
    }
    if (isNaN(questionNum)) {
      alert('Это не число, осталось попыток ' + counter);
      count();
      startGame();
    }
    if (questionNum > secretNum) {
      alert('Загаданное число меньше, осталось попыток ' + counter);
      count();
      startGame();
    }
    if (questionNum < secretNum) {
      alert('Загаданное число больше, осталось попыток ' + counter);
      count();
      startGame();
    }
    if (secretNum === questionNum) {
      if (confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')){
        game();
      }
    }
  }
  startGame();
}
game();