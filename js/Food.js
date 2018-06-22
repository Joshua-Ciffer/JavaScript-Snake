/**
 * @author Joshua Ciffer
 * @version 02/13/2018
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