/**
 * @author Joshua Ciffer
 * @version 02/12/2018
 */
var snake;
var food;
var scl = 10;

function setup() {
	createCanvas(500, 500);
	snake = new Snake();
	food = new Food();
	frameRate(15);
}

function draw() {
	background(0);
	keyPressed();
	updatePosition();
}

function keyPressed() {
	if (keyCode == UP_ARROW) {
		snake.move(0, -1);
	} else if (keyCode == DOWN_ARROW) {
		snake.move(0, 1);
	} else if (keyCode == RIGHT_ARROW) {
		snake.move(1, 0);
	} else if (keyCode == LEFT_ARROW) {
		snake.move(-1, 0);
	}
}

function updatePosition() {
	fill(255, 255, 0);
	rect(this.snake.pos.x, this.snake.pos.y, 10, 10);
	fill(255);
	rect(this.food.pos.x, this.food.pos.y, 10, 10);
}