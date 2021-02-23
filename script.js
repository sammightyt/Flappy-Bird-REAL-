var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

function Bird(initialPositionX, initialPositionY) {
  this.xPos = initialPositionX;
  this.yPos = initialPositionY;
  this.flapCounter = 0;
}

Bird.prototype.moveDown = function () {
  this.yPos += 5;
}

Bird.prototype.moveUp = function(keycode){
	this.yPos -= 30;
}




Bird.prototype.draw = function () {
  var flapPosition = ["down", "mid", "up"];

  var bird = new Image();
  bird.src = `https://raw.githubusercontent.com/sourabhv/FlapPyBird/master/assets/sprites/bluebird-${flapPosition[this.flapCounter]}flap.png`;
  ctx.drawImage(bird, this.xPos, this.yPos);
  this.flapCounter++;
  if (this.flapCounter > 2) {
    this.flapCounter = 0;
  }
}


function Game() {
  this.flappyBird = new Bird(10, 10);
}


Game.prototype.run = function () {
  setInterval(function () {
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    this.flappyBird.moveDown()
    this.flappyBird.draw();
  }.bind(this), 100);
	
	document.addEventListener("keydown",function(e){
		var code = e.keyCode;
		if(code == 32){
			ctx.clearRect(0, 0, cvs.width, cvs.height);
			this.flappyBird.moveUp();
			this.flappyBird.draw();
		}
		}.bind(this))
	}


var game = new Game();
game.run();



