/**
 * @author Joshua Ciffer
 * @version 02/13/2018
 */
function Food() {
	this.pos = createVector(floor(random(width)), floor(random(height)));
	
	this.respawnFood = function() {
		this.pos = createVector(floor(random(width)), floor(random(height)));
	}
	
	this.eat = function(Snake) {
		if(dist(this.pos.x, this.pos.y, Snake.pos.x, Snake.pos.y) < 1) {
			Food.respawnFoood();
		}
	}
	
}