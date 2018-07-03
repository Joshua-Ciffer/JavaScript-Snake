/**
 * This file contains a constructor function and functions that operate on a snake object.
 * 
 * @author Joshua Ciffer
 * @version 07/03/2018
 */

/**
 * Snake constructor function.
 * 
 * A snake is spawned in a random location on the 50x50 grid. Its speed starts at zero, and its length starts at one. Its speed is updated by calling updateSpeed() which sets
 * its x and y speed. The snake is moved every frame by calling move(), which moves the snake's x and y position in increments of 10 (one grid space). A snake dies when it
 * runs into itself.
 * 
 * @returns A new Snake object.
 */
function Snake() {

	/**
	 * This snake's current position on the canvas, stored in a vector object with an x and y position.
	 */
	this.pos = createVector((floor(random(0, width) / gridScale) * gridScale), (floor(random(0, height) / gridScale) * gridScale));

	/**
	 * This snake's speed in the x direction.
	 */
	this.xSpeed = 0;

	/**
	 * This snake's speed in the y direction.
	 */
	this.ySpeed = 0;

	/**
	 * The snake's tail. Each time the snake eats a food, one length is added on to its tail.
	 */
	this.tail = [];

	/**
	 * Updates this snake's speed.
	 * 
	 * Up: x = 0, y = -1
	 * Down: x = 0, y = 1
	 * Right: x = 1, y = 0
	 * Left: x = -1, y = 0
	 * 
	 * @param x
	 *        The speed in the x direction to set.
	 * @param y
	 *        The speed in the y direction to set.
	 * @returns void
	 */
	this.updateSpeed = function(x, y) {
		this.xSpeed = x;
		this.ySpeed = y;
	}

	/**
	 * Updates this snake's position. Snake moves in increments of 10 (one grid space).
	 * 
	 * @returns void
	 */
	this.updatePosition = function() {
		this.pos.x += this.xSpeed * gridScale;
		this.pos.y += this.ySpeed * gridScale;
	}

}