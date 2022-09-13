xpos = 200
ypos = 200
dx = 5;
dy = 3;

function preload()
{

}

function setup() {
  createCanvas(400,400);
 
}

function draw() 
{
background('blue');
rect(10,ypos,10,80);
rect(388,mouseY,10,80);
ellipse(xpos,ypos,15,15);
if(xpos>=width-20 || xpos==20)

fill('white')
text('BEACH PING PONG GAME',200,30);

  
  drawSprites();
}


