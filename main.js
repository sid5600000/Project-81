canvas = document.getElementById("mycanvas");
ctx = canvas.getContext ("2d");

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 1;
ctx.rect(200,130,400,250);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 7;
ctx.arc(320,210,50,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 7;
ctx.arc(400,210,50,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 7;
ctx.arc(480,210,50,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 7;
ctx.arc(360,290,50,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 7;
ctx.arc(440,290,50,0,2*Math.PI);
ctx.stroke();