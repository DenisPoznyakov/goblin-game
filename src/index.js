import image from "./goblin.png"

document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('game-board');
    const rows = 4;
    const cols = 4;
  
    // Создаем игровое поле
    for (let i = 0; i < rows * cols; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      board.appendChild(cell);
    }
  
    const cells = Array.from(document.querySelectorAll('.cell'));
    let currentCellIndex = Math.floor(Math.random() * cells.length);
  
    // Добавляем гнома в случайную ячейку
    const goblin = document.createElement('img');
    //goblin.src = 'https://raw.githubusercontent.com/netology-code/ahj-homeworks/refs/heads/AHJ-50/dom/pic/goblin.png';
    goblin.src = image;
    cells[currentCellIndex].appendChild(goblin);
  
    // Функция перемещения гнома
    function moveGoblin() {
      let nextCellIndex;
      do {
        nextCellIndex = Math.floor(Math.random() * cells.length);
      } while (nextCellIndex === currentCellIndex);
  
      cells[currentCellIndex].removeChild(goblin);
      cells[nextCellIndex].appendChild(goblin);
      currentCellIndex = nextCellIndex;
    }
  
    // Запускаем перемещение каждые 1 секунду
    setInterval(moveGoblin, 1000);
  });