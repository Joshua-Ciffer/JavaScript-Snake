/**
 * @author Joshua Ciffer
 * @version 06/22/2018
 */
function Snake() {

	this.pos = createVector((floor(random(width)) % 10), (floor(random(height)) % 10));
	this.xSpeed = 0;
	this.ySpeed = 0;
	this.length = 1;
	this.tail = [];

	this.updateSpeed = function(x, y) {
		this.xSpeed = x;
		this.ySpeed = y;
	}

	this.move = function() {
		this.pos.x += this.xSpeed * gridScale;
		this.pos.y += this.ySpeed * gridScale;
	}

}