//Jack Noaksson, Jano6161; Jacob Didenbäck, jadi4034

var canvas = document.getElementById('mainCanvas');
var context = canvas.getContext('2d');

context.beginPath();
context.moveTo(80, 280);
context.lineTo(360, 50);
context.lineWidth = 10;
context.strokeStyle = '#aa00aa';
context.stroke();