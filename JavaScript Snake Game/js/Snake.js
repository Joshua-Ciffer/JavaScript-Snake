/**
 * @author Joshua Ciffer
 * @version 02/01/2018
 */
function Snake() {
	this.x = 0;
	this.y = 0;
	this.xSpeed = 0;
	this.ySpeed = 0;
	this.length = 1;
	this.tail = [];
	
	this.drawSnake = function() {
		fill(255, 255, 0);
		for (var i = 0; i < this.length; i++) {
			rect((this.x + i), (this.y + i), 10, 10);
		}
	}
	
	this.updatePosition = function(x, y) {
		this.x = this.x + x;
		this.y = this.y + y;
	}
	
}