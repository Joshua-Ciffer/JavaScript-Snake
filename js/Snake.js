/**
 * @author Joshua Ciffer
 * @version 02/01/2018
 */
function Snake() {
	this.pos = createVector(random(width), random(height));
	this.xSpeed = 0;
	this.ySpeed = 0;
	this.length = 1;
	this.tail = [];
	
	this.move = function(x, y) {
		this.x = this.x + x;
		this.y = this.y + y;
	}
	
}