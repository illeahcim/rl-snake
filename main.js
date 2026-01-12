const canvas = document.getElementById("gamescreen");
const ctx = canvas.getContext("2d");
const numRows = 15;
const numCols = 15;
const cellWidth = canvas.width / numCols;
const cellHeight = canvas.height / numRows;
const centerRow = Math.floor(numRows / 2) * cellHeight;
const centerCol = Math.floor(numCols / 2) * cellWidth;
let initialSnakeSize = [0, 1, 2];

function drawScreen() {
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      if ((row + col) % 2) {
        ctx.fillStyle = "#90EE90"; // light green

        ctx.fillRect(col * cellWidth, row * cellHeight, cellWidth, cellHeight);

      }
      if (!((row + col) % 2)) {
        ctx.fillStyle = "#22d694"; // dark green

        ctx.fillRect(col * cellWidth, row * cellHeight, cellWidth, cellHeight);

      }
    }
  }
}

function drawSnake() {
  initialSnakeSize.forEach(i => {
    ctx.fillStyle = "#ADD8E6";
    x = centerCol - (i * cellWidth);
    y = centerRow;

    ctx.fillRect(x, y, cellWidth, cellHeight);
  });
}


drawScreen();
drawSnake();

