//Last orientation (PORTRAIT or LANDSCAPE)
var lastOrientation;

//Last Y rotation
var lastRotationY;

//Last X rotation
var lastRotationX;

const DEBUG = true;

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
    //Horizontal bubble
    //Not working properly

    let deltaRotationY = 0;

    if(abs(rotationY) > 45)
    {
      deltaRotationY = cos(rotationY) - cos(lastRotationY)
    }
    else
    {
      deltaRotationY = sin(rotationY) - sin(lastRotationY)
    }

    lastRotationY += map(deltaRotationY,-2,2,-5,5)
    /*if(abs(lastRotationY-rotationY)  < 0)
    {
      deltaRotationY = -cos(rotationY) - cos(lastRotationY)
      lastRotationY += map(deltaRotationY,-2,2,-5,5)
    }
    else
    {
      deltaRotationY = cos(rotationY) - cos(lastRotationY);
      lastRotationY -= map(deltaRotationY,-2,2,-5,5)
    }*/

    fill(0,0,255);
    ellipse(screen.width*map(cos(lastRotationY+90),-1,1,0.05,0.95),screen.height/2, 80, 80);

    //Vertical bubble
    //OK
    let deltaRotationX = sin(rotationX) - sin(lastRotationX);
    lastRotationX += map(deltaRotationX,-2,2,-5,5)

    fill(255,0,0);
    ellipse(screen.width/2, screen.height*map(cos(lastRotationX+90),-1,1,0.05,0.95), 80, 80);

        
    if(DEBUG)
    {
      fill(0,0,0);
      text("RotationX : "+rotationX,50,40);
      text("RotationY : "+rotationY,50,70);
      text("RotationZ : "+rotationZ,50,100);

      text("lastRotationX : "+lastRotationX,50,140);
      text("lastRotationY : "+lastRotationY,50,170);
    }
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
