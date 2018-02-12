/**
 * @author Joshua Ciffer
 * @version 02/12/2018
 */
function Food() {
	this.pos = createVector(floor(random(width)), floor(random(height)));
	
	this.respawnFood = function() {
		this.pos = createVector(floor(random(width)), floor(random(height)));
	}
	
}