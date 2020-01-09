var b = document.getElementById("ThisIsCanvas");
var ctx = b.getContext("2d");
// Creating gradient
var grad = ctx.createLinearGradient(0, 0, 160, 0);
grad.addColorStop(0, "yellow");
grad.addColorStop(1, "blue");
// Filling with gradient
ctx.fillStyle = grad;
ctx.fillRect(10, 10, 130, 130);