/**
 * @author Joshua Ciffer
 * @version 02/01/2018
 */
function setup() {
	createCanvas(500, 500);
	background(0);
	snake = new Snake();
	spawnFood();
}

function draw() {
	keyPressed();
	snake.drawSnake();
}

function spawnFood() {
	var x = floor(random(height));
	var y = floor(random(width));
	fill(0, 255, 255);
	rect(x, y, 10, 10);
}

function keyPressed() {
	if (keyCode == UP_ARROW) {
		snake.xSpeed = 0;
		snake.ySpeed = 1;
	} else if (keyCode == DOWN_ARROW) {
		snake.xSpeed = 0;
		snake.ySpeed = -1;
	} else if (keyCode == RIGHT_ARROW) {
		snake.xSpeed = 1;
		snake.ySpeed = 0;
	} else if (keyCode == LEFT_ARROW) {
		snake.xSpeed = -1;
		snake.ySpeed = 0;
	}
}