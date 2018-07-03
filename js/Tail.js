/**
 * This file contains a constructor function and functions that operate on a tail object.
 * 
 * @author Joshua Ciffer
 * @version 07/03/2018
 */

/**
 * Tail constructor function.
 * 
 * Each tail object is added to the array stored in a snake object. Each tail section has its own position and speed so it can move independently of the head of the snake.
 * 
 * @param xPos
 *        The starting x position.
 * @param yPos
 *        The starting y position.
 * @param xSpeed
 *        The starting x speed.
 * @param ySpeed
 *        The starting y speed.
 * @returns A new Tail object.
 */
function Tail(xPos, yPos, xSpeed, ySpeed) {

	/**
	 * This Tail object's current position on the canvas, stored in a vector object with an x and y position.
	 */
	this.pos = createVector(xPos, yPos);

	/**
	 * The tail's speed in the x direction.
	 */
	this.xSpeed = xSpeed;

	/**
	 * The tail's speed in the y direction.
	 */
	this.ySpeed = ySpeed;

	/**
	 * Updates the tail's speed.
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
	 * Updates the tail's position. Tail moves in increments of 10 (one grid space).
	 * 
	 * @returns void
	 */
	this.updatePosition = function() {
		this.pos.x += this.xSpeed * gridScale;
		this.pos.y += this.ySpeed * gridScale;
	}

}