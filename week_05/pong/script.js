/* Canvas */

//grab canvas
var canvas = $('#canvas')[0];
//grab context
var context = canvas.getContext("2d");

//set the width and height of canvas
canvas.width = window.innerWidth-20;
canvas.height = window.innerHeight-20;



window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();



