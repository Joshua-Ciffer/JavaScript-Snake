/**
 * This file contains the p5.js functions for creating the html canvas and drawing to the screen.
 * 
 * @author Joshua Ciffer
 * @version 07/03/2018
 */

/**
 * The snake object.
 */
var snake;

/**
 * The food object.
 */
var food;

/**
 * The size of each grid space on the canvas.
 */
var gridScale = 10;

/**
 * Initial canvas setup. Size is set to 500x500 (50x50 logical size because of grid scale), frame rate is set to 14, and objects are initialized.
 * 
 * @returns void
 */
function setup() {
	createCanvas(500, 500);
	frameRate(14);
	snake = new Snake();
	food = new Food();
}

/**
 * Repeatedly draws to the screen and updates the canvas.
 * 
 * @returns void
 */
function draw() {
	background(0);
	drawSnake();
	drawFood();
	checkGameEnd();
}

/**
 * Changes the direction of snake movement based off of input from the arrow keys or WASD keys.
 * 
 * @returns void
 */
function keyPressed() {
	if ((keyCode == UP_ARROW) || (keyCode == 87)) { // Up arrow or W key.
		if (!(this.snake.pos.x < 0) && !(this.snake.pos.x >= width)) {
			if (this.snake.length == 1) {
				this.snake.updateSpeed(0, -1);
			} else if ((this.snake.xSpeed != 0) && (this.snake.ySpeed != 1)) {
				this.snake.updateSpeed(0, -1);
			}
		}
	} else if ((keyCode == DOWN_ARROW) || (keyCode == 83)) { // Down arrow or S key.
		if (!(this.snake.pos.x < 0) && !(this.snake.pos.x >= width)) {
			if (this.snake.length == 1) {
				this.snake.updateSpeed(0, 1);
			} else if ((this.snake.xSpeed != 0) && (this.snake.ySpeed != -1)) {
				this.snake.updateSpeed(0, 1);
			}
		}
	} else if ((keyCode == RIGHT_ARROW) || (keyCode == 68)) { // Right arrow or D key.
		if (!(this.snake.pos.y < 0) && !(this.snake.pos.y >= height)) {
			if (this.snake.length == 1) {
				this.snake.updateSpeed(1, 0);
			} else if ((this.snake.xSpeed != -1) && (this.snake.ySpeed != 0)) {
				this.snake.updateSpeed(1, 0);
			}
		}
	} else if ((keyCode == LEFT_ARROW) || (keyCode == 65)) { // Left arrow or A key.
		if (!(this.snake.pos.y < 0) && !(this.snake.pos.y >= height)) {
			if (this.snake.length == 1) {
				this.snake.updateSpeed(-1, 0);
			} else if ((this.snake.xSpeed != 1) && (this.snake.ySpeed != 0)) {
				this.snake.updateSpeed(-1, 0);
			}
		}
	} else if (keyCode == 32) { // Space bar.
		this.snake.updateSpeed(0, 0);
	}
}

/**
 * Picks a new random location on the 50x50 grid and stores the x and y position in a vector object.
 * 
 * @returns A random location on the canvas stored in a vector object.
 */
function pickLocation() {
	return createVector((floor(random(0, width) / gridScale) * gridScale), (floor(random(0, height) / gridScale) * gridScale));
}

/**
 * Updates the snake's position and draws to the canvas.
 * 
 * @returns void
 */
function drawSnake() {
	this.snake.updatePosition();	// Updates the snake's position in whatever direction it is moving.
	for (let i = 0; i < this.snake.tail.length - 1; i++) {	// Shifts the snake's location history down.
		this.snake.tail[i] = this.snake.tail[i + 1];
	}
	this.snake.tail[this.snake.length - 1] = createVector(this.snake.pos.x, this.snake.pos.y);	// Sets the snake's current position in its history.
	fill(255, 255, 0);
	for (let i = this.snake.tail.length - 1; i >= 0; i--) {		// Draws the snake.
		rect(this.snake.tail[i].x, this.snake.tail[i].y, gridScale, gridScale);
	}
	if (this.snake.pos.x < 0) { // If snake goes off the left side of the screen,
		this.snake.pos.x = width;
	} else if (this.snake.pos.x >= width) { // If snake goes off the right side of the screen,
		this.snake.pos.x = -gridScale;
	} else if (this.snake.pos.y < 0) { // If snake goes off the top of the screen,
		this.snake.pos.y = height;
	} else if (this.snake.pos.y >= height) { // If snake goes off the bottom of the screen,
		this.snake.pos.y = -gridScale;
	}
	document.getElementById("length").innerText = this.snake.length;
}

/**
 * Updates the food's position and draws to the canvas.
 * 
 * @returns void
 */
function drawFood() {
	this.food.updatePosition();
	fill(255);
	rect(this.food.pos.x, this.food.pos.y, gridScale, gridScale);
}

/**
 * Checks to see if the game ends.
 * 
 * Player loses if the head of the snake runs into part of its tail. The player wins if they fill up the entire gameboard with the snake (snake length = canvas size).
 * 
 * @returns void
 */
function checkGameEnd() {
	for (let i = 0; i < this.snake.tail.length - 1; i++) {
		if ((this.snake.tail[i].x == this.snake.pos.x) && (this.snake.tail[i].y == this.snake.pos.y)) {	// If snake hits its tail, player loses.
			window.alert("You lost! Your snake got to length: " + this.snake.length);
			snake = new Snake();
			food = new Food();
		}
	}
	if ((width / gridScale) * (height / gridScale) == this.snake.length) {	// If snake takes up the whole canvas, player wins.
		window.alert("Congratulations! You won somehow! If you got here legitimately, please tell the programmer. I'm not sure if it's even possible to win this...");
		snake = new Snake();
		food = new Food();
	}
}