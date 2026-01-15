const canvas = document.getElementById("gamescreen");
const ctx = canvas.getContext("2d");
const numRows = 15;
const numCols = 15;
const cellWidth = canvas.width / numCols;
const cellHeight = canvas.height / numRows;
const centerRow = Math.floor(numRows / 2) * cellHeight;
const centerCol = Math.floor(numCols / 2) * cellWidth;
let initialSnakeSize = [0, 1, 2];
let food = {
  col: 9,
  row: 7,
}

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

function drawApple(food) {
  const x = food.col * cellWidth + cellWidth / 2
  const y = food.row * cellHeight + cellHeight / 2
  let randomPositionX = Math.floor(Math.random() * numCols);
  let randomPositionY = Math.floor(Math.random() * numRows);
  let firstApple = true;

  ctx.beginPath();
  ctx.arc(x, y, cellWidth / 2.3, 0, 2 * Math.PI);
  ctx.fillStyle = "red";
  ctx.fill();
}

function drawSnake() {
  initialSnakeSize.forEach(i => {
    const radius = 5;
    ctx.fillStyle = "#ADD8E6";
    x = centerCol - (i * cellWidth);
    y = centerRow;

    ctx.beginPath();
    ctx.roundRect(x, y, cellWidth, cellHeight, radius);
    ctx.fill();
  });
}


drawScreen();
drawSnake();
drawApple(food);

