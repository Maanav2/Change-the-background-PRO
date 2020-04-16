var r,g,b,m;

function setup() {
  createCanvas(800,400);
 
 
}

function draw() {
  rgb(r,g,b);
  background(rgb(mouseX,mouseY,0));  
 m=map(m,mouseX,0,mouseY,0);
 ellipse(mouseX,mouseY,20,20);
  drawSprites();
}