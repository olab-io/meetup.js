/* Canvas */

//grab canvas
var canvas = $('#canvas')[0];
//grab context
var context = canvas.getContext("2d");

//set the width and height of canvas
canvas.width = window.innerWidth-20;
canvas.height = window.innerHeight-20;

var gameOver = false;

//CONSTRUCTORS

/* Paddle
** @param 'x' : x-position of the paddle
** @param 'color' : a string, color name or hex
*/
function Paddle(x,color){

	//grab this context
	var that = this;

	//set width and height of paddle
	var width = 30;
	var height = 120;

	//set x and y position
	var xpos = x;
	var ypos = canvas.height/2;

	//set color
	var color = color || "black";

	//initialize speed to 0
	var speed = 0; 


	this.draw = function(){	
		//make sure paddle stays in canvas
		if(ypos <= 0){
			ypos = 0;
		} else if(ypos + height >= canvas.height){
			ypos = canvas.height - height;
		}
		//draw it
		context.fillStyle = color;
		context.fillRect(xpos,ypos,width,height);
	}

	this.update = function(delta){
		if(delta){ //Check to see if delta exist
			(ypos += speed * delta) 
		} else{
			ypos = ypos;
		}
	}

	this.setSpeed = function(numb){
		speed = numb;
	}

	this.detectCollision = function(x,y,radius){
		if(that.detectY(y,radius) && that.detectX(x,radius)){
			return true;
		}
	}

	this.detectY = function(y,radius){
		if((y + radius > ypos) &&
			(y - radius < ypos + height)) {
			return true;
		}
	}

	this.detectX = function(x,radius){
		if((x + radius > xpos) &&
			(x - radius < xpos + width)){
			return true
		}
	}


}

//create two paddles
var player1 = new Paddle(10);
var player2 = new Paddle(canvas.width-10-30);


/* Ball */
function Ball(size,speed,color){
	var that = this;

	var speedX = speed || 1;
	var speedY = speed || 1;
	var radius =  size || 5;

	var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;

    var color = color || "green";

	this.draw = function(){
    	context.beginPath();
    	context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
		context.fillStyle = color;
		context.fill();
		context.lineWidth = 0;
    	//context.strokeStyle = '#003300';
    	//context.stroke();
	}

	this.update = function(paddles){
		that.detectCollision(paddles);

		centerX += speedX;
		centerY += speedY;

	}

	this.detectCollision = function(paddles){
		//check y
		if((centerY - radius <= 0) || (centerY + radius >= canvas.height)){
			speedY *= -1;
		}

		//check paddles
		for(var i=0; i<paddles.length; i+=1){
			var paddle = paddles[i];
			
			if(paddle.detectCollision(centerX,centerY,radius)){
				speedX *= -1;
				return;
			}
		}

		//check game
		if(centerX < 0){
			alert("Player 2 wins!");
			gameOver = true;
		} else if(centerX > canvas.width){
			alert("Player 1 wins");
			gameOver = true;
		}

	}
}

var gameBall = new Ball(12,4,"#F0E68C"); //gold


/* Event */
window.onkeydown = function(e){
	switch(e.keyCode){
		case 38 :  player2.setSpeed(-0.3); 
			break;
		case 40 : player2.setSpeed(.3); 
			break;
		case 87 : player1.setSpeed(-0.3);
			break;
		case 83 : player1.setSpeed(.3);
	}
}

/* Animate */
var lastTime = 0;

function animate(time){
	if(!gameOver){
		requestAnimFrame(animate);

		var timeDelta = time - lastTime;

		player1.update(timeDelta);
		player2.update(timeDelta);
		gameBall.update([player1,player2]);

		context.clearRect(0,0,canvas.width,canvas.height);
		context.fillStyle = "green";
		context.fillRect(0,0,canvas.width,canvas.height);

		player1.draw();
		player2.draw();
		gameBall.draw();


		lastTime = time;
	}
}


window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();


animate();


