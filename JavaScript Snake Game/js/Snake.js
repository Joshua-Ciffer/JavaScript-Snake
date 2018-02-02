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
		for (var i = 0; i < this.length; i++) {
			fill(255, 255, 0);
			rect(0, 0, 10, 10);
		}
		this.x = this.x + this.xSpeed;
		this.y = this.y + this.ySpeed;
	}
	
}