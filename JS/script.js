var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")
var ballRadius = 7;
//bollens startposition
var ballX = canvas.width/2;
var ballY = canvas.height-30;

//målar ut bollen man skjuter
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
}

setInterval(draw, 10);