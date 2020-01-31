'use strict'
function game() {

  function getRandNum() {
    return Math.floor(Math.random() * 100);
  }
  let secretNum = getRandNum();
  
    function startGame() {
      let questionNum = +prompt('Введите число');
      if (secretNum === questionNum) {
        alert('Правильно');
        return;
      }else if (questionNum <= null) {
        alert('Выход из игры!!!');
        return;
      }
      if (isNaN(questionNum)) {
        alert('Это не число');
        startGame();
      } else if (questionNum > secretNum) {
        alert('Загаданное число меньше');
        startGame();
      } else {
        alert('Загаданное число больше');
        startGame();
      } 
    }
    startGame();
}   
game();