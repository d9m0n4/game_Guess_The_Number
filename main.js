function game() {
  let secretNum = 23;
  let questionNum = +prompt('Введите число');
    function startGame() {
      if (secretNum === questionNum) {
        alert('Правильно');
        return;
      }else if (questionNum <= null) {
        alert('Выход из игры!!!');
        return;
      }
      if (isNaN(questionNum)) {
        alert('Это не число');
        return game();
      } else if (questionNum > secretNum) {
        alert('Загаданное число меньше');
        return game();
      } else {
        alert('Загаданное число больше');
        return game();
      } 
    }
    startGame();
}   
game();