/**
 * @author Joshua Ciffer
 * @version 02/12/2018
 */
function Food() {
	this.pos = createVector(random(width), random(height));
	
	this.respawnFood = function() {
		this.pos = createVector(width, height);
	}
	
}