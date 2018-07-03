/**
 * This file contains a constructor function and functions that operate on a Food object.
 * 
 * @author Joshua Ciffer
 * @version 07/03/2018
 */

/**
 * Food constructor function.
 * 
 * A Food object is spawned in a random location on the 50x50 grid. If the snake comes in contact and eats the food, then it is re-spawned in a new location.
 * 
 * @returns A new Food object.
 */
function Food() {

	/**
	 * This food object's position on the canvas, stored in a vector object with an x and y position.
	 */
	this.pos = pickLocation();

	/**
	 * If the snake comes in contact with the food and eats it, then the food is moved to a new location on the grid.
	 * 
	 * @returns void
	 */
	this.updatePosition = function() {
		if (dist(this.pos.x, this.pos.y, snake.pos.x, snake.pos.y) < 1) {
			this.pos = pickLocation();
			snake.length++;
		}
	}

}