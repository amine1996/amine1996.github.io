//Last orientation (PORTRAIT or LANDSCAPE)
var lastOrientation;

//Last Y rotation
var lastRotationY;

function setup() 
{
  createCanvas(screen.width, screen.height);

  if(deviceOrientation == LANDSCAPE)
    resizeCanvas(screen.height, screen.width);

  background(255,255,255);   
  angleMode(DEGREES);

  lastOrientation = deviceOrientation;
  lastRotationY = 0; 

  textSize(20);
}

function draw() 
{
  background(255,255,255);

  if(rotationY != null)
  {
    fill(0,0,0);
    text("RotationX : "+rotationX);
    text("RotationY : "+rotationY);
    text("RotationZ : "+rotationZ);

    fill(255,0,0);
    ellipse(screen.width/2, screen.height*map(cos(lastRotationY),-1,1,0.05,0.95), 80, 80);

    fill(0,255,0);
    ellipse(screen.width*map(cos(lastRotationY+90),-1,1,0.05,0.95),screen.height/2, 80, 80);

    //Not working, looking for a fluid movement and also faster as the difference is bigger
    let deltaRotation = (rotationY%180) - lastRotationY;
    
    lastRotationY += map(deltaRotation,0,180,0,5);
  }
  else
  {
    text("No rotation found",10,30);
  }
}
//Not used for the moment-
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
