//Last orientation (PORTRAIT or LANDSCAPE)
var lastOrientation;

//Last Y rotation
var horizontalBubbleAngle;

//Last X rotation
var verticalBubbleAngle;

const DEBUG = true;

function setup() 
{
  createCanvas(screen.width, screen.height);

  if(deviceOrientation == LANDSCAPE)
    resizeCanvas(screen.height, screen.width);

  background(255,255,255);   
  angleMode(DEGREES);

  lastOrientation = deviceOrientation;
  horizontalBubbleAngle = 0; 
  verticalBubbleAngle = 0;

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

    let deltaRotationY = cos(map(abs(rotationY),0,90,-90,90)) - cos(horizontalBubbleAngle);
    horizontalBubbleAngle += map(deltaRotationY,-2,2,-5,5)

    fill(0,0,255);
    ellipse(screen.width*map(cos(horizontalBubbleAngle+90),-1,1,0.05,0.95),screen.height/2, 80, 80);

    //Vertical bubble
    //OK
    let deltaRotationX = sin(rotationX) - sin(verticalBubbleAngle);
    verticalBubbleAngle += map(deltaRotationX,-2,2,-5,5)

    fill(255,0,0);
    ellipse(screen.width/2, screen.height*map(cos(verticalBubbleAngle+90),-1,1,0.05,0.95), 80, 80);
        
    if(DEBUG)
    {
      fill(0,0,0);
      text("RotationX : "+rotationX,50,40);
      text("RotationY : "+rotationY,50,70);
      text("RotationZ : "+rotationZ,50,100);

      text("verticalBubbleAngle (RotationX) : "+verticalBubbleAngle,50,140);
      text("horizontalBubbleAngle (RotationY) : "+horizontalBubbleAngle,50,170);
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