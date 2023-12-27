var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

/* context.lineWidth = 30;
context.strokeStyle = "red"

context.moveTo(60, 30);
context.lineTo(120, 30);
context.lineCap = "butt";
context.stroke(); */

// Draw the pig's smiley face
ctx.fillStyle = "yellow";
ctx.fillRect(120, 120, 30, 30);
ctx.fillStyle = "black";
ctx.fillRect(125, 125, 10, 10);
ctx.fillRect(135, 125, 10, 10);