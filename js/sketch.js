//Last orientation (PORTRAIT or LANDSCAPE)
var lastOrientation;

//Last Y rotation
var lastRotationY;

var lastRotationX;

function setup() 
{
  createCanvas(screen.width, screen.height);

  if(deviceOrientation == LANDSCAPE)
    resizeCanvas(screen.height, screen.width);

  background(255,255,255);   
  angleMode(DEGREES);

  lastOrientation = deviceOrientation;
  lastRotationY = 0; 
  lastRotationX = 0;

  textSize(20);
}

function draw() 
{
  background(255,255,255);

  //A plat
  if(rotationY != null && rotationX != null)
  {
    fill(0,0,0);
    text("RotationX : "+rotationX,50,40);
    text("RotationY : "+rotationY,50,70);
    text("RotationZ : "+rotationZ,50,100);

    //Bulle verticale
    fill(255,0,0);
    ellipse(screen.width/2, screen.height*map(cos(lastRotationX),-1,1,0.05,0.95), 80, 80);

    //Bulle horizontale
    fill(0,255,255);
    ellipse(screen.width*map(cos(lastRotationY+90),-1,1,0.05,0.95),screen.height/2, 80, 80);

    let deltaRotationY = rotationY - lastRotationY;
    lastRotationY += map(deltaRotation,0,180,-5,5);

    let deltaRotationX = rotationX - lastRotationX;
    lastRotationX += map(deltaRotation,0,180,-5,5);
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
