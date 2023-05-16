
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const img = document.getElementById("html");



ctx.fillStyle = "green"
ctx.fillRect (10, 10, 150, 100);
//retangulo



ctx.beginPath();
ctx.arc(400, 75, 50, 20, 20 * Math.PI);
ctx.stroke();
//Circulo

ctx.moveTo(800, 150);
ctx.lineTo(0, 150);
ctx.stroke();
//Linha



ctx.beginPath();
ctx.moveTo(90,280);
ctx.quadraticCurveTo(285,500,470,280);
ctx.stroke();
//linha curva

