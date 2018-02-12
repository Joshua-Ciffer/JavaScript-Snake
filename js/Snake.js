/**
 * @author Joshua Ciffer
 * @version 02/01/2018
 */
function Snake() {
	this.pos = createVector(floor(random(width)), floor(random(height)));
	this.xSpeed = 0;
	this.ySpeed = 0;
	this.length = 1;
	this.tail = [];
	
	this.move = function(x, y) {
		this.xSpeed = x * scl;
		this.ySpeed = y * scl;
		this.pos.x += this.xSpeed;
		this.pos.y += this.ySpeed;
		constrain(this.pos.x, width);
		constrain(this.pos.y, height);
	}
	
}