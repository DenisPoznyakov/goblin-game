/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', function () {\n  var board = document.getElementById('game-board');\n  var rows = 4;\n  var cols = 4;\n\n  // Создаем игровое поле\n  for (var i = 0; i < rows * cols; i++) {\n    var cell = document.createElement('div');\n    cell.classList.add('cell');\n    board.appendChild(cell);\n  }\n  var cells = Array.from(document.querySelectorAll('.cell'));\n  var currentCellIndex = Math.floor(Math.random() * cells.length);\n\n  // Добавляем гнома в случайную ячейку\n  var goblin = document.createElement('img');\n  goblin.src = 'https://raw.githubusercontent.com/netology-code/ahj-homeworks/refs/heads/AHJ-50/dom/pic/goblin.png';\n  cells[currentCellIndex].appendChild(goblin);\n\n  // Функция перемещения гнома\n  function moveGoblin() {\n    var nextCellIndex;\n    do {\n      nextCellIndex = Math.floor(Math.random() * cells.length);\n    } while (nextCellIndex === currentCellIndex);\n    cells[currentCellIndex].removeChild(goblin);\n    cells[nextCellIndex].appendChild(goblin);\n    currentCellIndex = nextCellIndex;\n  }\n\n  // Запускаем перемещение каждые 1 секунду\n  setInterval(moveGoblin, 1000);\n});\n\n//# sourceURL=webpack://goblin-game/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;