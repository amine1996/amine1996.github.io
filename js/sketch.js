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
  resizeOnOrientationChange();
  
  textSize(20);

  if(rotationX != null && rotationY != null && rotationZ != null)
  {
    fill(255,0 ,255);
    ellipse(screen.width*map(cos(rotationY),-1,1,0,1), screen.height/2, 80, 80);
    /*

    fill(128,0,0);
    textSize(20);

    text(rotationX,10,30);
    text(rotationY,10,50);
    text(rotationZ,10,70);
    */
  }
  else
  {
    text("No rotation found",10,30);
  }
}

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