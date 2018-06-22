/**
 * This file contains a constructor function and functions that operate on a Food object.
 * 
 * @author Joshua Ciffer
 * @version 06/22/2018
 */

/**
 * Food constructor function.
 * 
 * A Food object is spawned in a random location on the 50x50 grid. If the snake comes in contact and eats the food, then it is re-spawned in a new location.
 *
 * @returns A new Food object.
 */
function Food() {
	
	this.pos = createVector((round(random(0, width) / 10) * 10), (round(random(0, height) / 10) * 10));
	
	this.respawnFood = function() {
		this.pos = createVector((round(random(0, width) / 10) * 10), (round(random(0, height) / 10) * 10));
	}
	
	this.eat = function(Snake) {
		if(dist(this.pos.x, this.pos.y, Snake.pos.x, Snake.pos.y) < 1) {
			Food.respawnFoood();
		}
	}
	
}