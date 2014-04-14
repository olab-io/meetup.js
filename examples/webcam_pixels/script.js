navigator.getUserMedia  = navigator.getUserMedia ||
                          navigator.webkitGetUserMedia ||
                          navigator.mozGetUserMedia ||
                          navigator.msGetUserMedia;

var localMediaStream = null;
var isStreaming = false;
var video = $('#video')[0];
var canvas = $('#canvas')[0];
var ctx = canvas.getContext('2d');
var width = window.innerWidth;
var height = window.innerHeight;
var animatedPixels = [];
var repelPoints = [];
var pixelSize = 10;

//in-memory canvas. Never rendered to the browser.
var memCanvas = document.createElement('canvas');
var memCtx = memCanvas.getContext('2d');

if (navigator.getUserMedia) {
  	
  	navigator.getUserMedia({ 
	  	video: true
	}, function(stream) {
	    video.src = window.URL.createObjectURL(stream);
	    localMediaStream = stream;
	  }, function(e){
	  	console.log(e);
	  });
} else {
 	alert("No support");
}

video.addEventListener('canplay', function(e) {
   
   if (!isStreaming) {
      // videoWidth isn't always set correctly in all browsers
      if (video.videoWidth > 0) height = video.videoHeight / (video.videoWidth / width);
      canvas.setAttribute('width', width);
      canvas.setAttribute('height', height);
      memCanvas.setAttribute('width', width);
      memCanvas.setAttribute('height', height);
      // Reverse the canvas image
      // ctx.translate(width, 0);
      // ctx.scale(-1, 1);
      // memCtx.translate(width, 0);
      // memCtx.scale(-1, 1);
      isStreaming = true;
   }
}, false);

init();

video.addEventListener('play', function(e){
	setInterval(animate, 1000/10);
}, false);

$('#canvas').click(function(e){
	repelPoints.push(getMousePos(e));
});

document.onkeyup = function (e) {
    e = e || window.event;
    if(e.keyCode == 32) {
    	init();
    }; 
}

//--------------------------------------------------------------

function init(){
	repelPoints = [];
	for (var y = 0; y < height; y += pixelSize) {
		animatedPixels[y] = [];
		for (var x = 0; x < width; x += pixelSize) {
			animatedPixels[y][x] = new AnimatedPixel(x, y, pixelSize);
		}
	}
}

function animate(){

	memCtx.fillRect(0, 0, width, height);
  	memCtx.drawImage(video, 0, 0, width, height);
  	var imageData = memCtx.getImageData(0, 0, width, height);
  	ctx.fillStyle = "#000";
  	ctx.fillRect(0, 0, width, height);
  	for (var y = 0; y < height; y += pixelSize) {
  		for (var x = 0; x < width; x += pixelSize) {
  			var pixel = getPixel(x, y, imageData);
  			animatedPixels[y][x].update();
  			animatedPixels[y][x].draw(pixel);
  		}
  	}
}

function getPixel(x, y, imageData){
	return {
		r: imageData.data[((y*(imageData.width*4)) + (x*4))],
		g: imageData.data[((y*(imageData.width*4)) + (x*4) + 1)],
		b: imageData.data[((y*(imageData.width*4)) + (x*4) + 2)],
		a: imageData.data[((y*(imageData.width*4)) + (x*4) + 3)]
	}
}

// returns [x, y]
function getMousePos(evt) {
	var rect = canvas.getBoundingClientRect();
	return [evt.clientX - rect.left, evt.clientY - rect.top];
}

function AnimatedPixel(x, y, size){
	
	var maxTargetDistance = 20;
	this.size = size;
	this.pos = $V([x, y]);
	this.start = $V([x, y]);
	// this.target = $V([getRandom(x - maxTargetDistance, x + maxTargetDistance), 
	// 				 getRandom(y - maxTargetDistance, y + maxTargetDistance)]);
	this.target = $V([width/2, 
	 				 height/2]);
	this.speed = getRandom(1, 4);
}

AnimatedPixel.prototype.update = function(pixel){
	for (var i = 0; i < repelPoints.length; i++) {
		// var speed = mapRange(this.pos.distanceFrom($V(repelPoints[i])), 0, 30, 0, 10);
		this.pos = this.pos.add(this.pos.subtract($V(repelPoints[i])).toUnitVector().multiply(this.speed));
	}
}

AnimatedPixel.prototype.draw = function(pixel){
	ctx.fillStyle = "rgb(" + pixel.r + "," + pixel.g + "," + pixel.b + ")";
	ctx.fillRect(this.pos.elements[0], this.pos.elements[1], this.size, this.size);
}

// returns [x, y]
function polarToCartesian(radius, theta){
    return [radius * Math.cos(theta), radius * Math.sin(theta)];
}

function getRandom(min, max){
	return Math.random() * (max - min) + min;
}

function mapRange(value, low1, high1, low2, high2){
    return low2 + (high2 - low2) * ((value - low1) / (high1 - low1));
}

  