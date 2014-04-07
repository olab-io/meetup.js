var canvas = $('#canvas')[0];
var context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


function lineTimeout(i,seg,time){

	var segment = canvas.height/seg;

	var ypos = segment * i;

	if(ypos >= canvas.height){
		console.log("Done");
		return;
	}

	setTimeout(function(){
		drawLine(0,ypos,canvas.width,ypos);
		lineTimeout(i+1,seg,time);
	}, time);
}



function drawLine(startx,starty,endx,endy){
	context.beginPath();
	context.moveTo(startx,starty);
	context.lineTo(endx,endy);
	context.stroke();
}

lineTimeout(1,10,200);


