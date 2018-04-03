var lastOrientation;

function setup() 
{
  createCanvas(screen.width, screen.height);

  if(deviceOrientation == LANDSCAPE)
    resizeCanvas(screen.height, screen.width);

  background(255,255,255);   
  angleMode(DEGREES);

  lastOrientation = deviceOrientation;
}

function draw() 
{
  background(255,255,255);

  if(rotationX != null && rotationY != null && rotationZ != null)
  {
    fill(0,255,0);
    ellipse(screen.width/2, screen.height*map(cos(rotationY),-1,1,0,1), 80, 80);

    fill(255,0,0);
    ellipse(screen.width*map(cos(rotationY+90),-1,1,0,1),screen.height/2, 80, 80);
  }
  else
  {
    text("No rotation found",10,30);
  }
}
//Not used for the moment
function resizeOnOrientationChange() 
{
  if(lastOrientation != deviceOrientation)
  {
    if(deviceOrientation == LANDSCAPE)
      resizeCanvas(screen.height,screen.width);
    else
      resizeCanvas(screen.width,screen.height);

    lastOrientation = deviceOrientation;
  }
}
