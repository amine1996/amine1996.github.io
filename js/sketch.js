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

    let deltaRotationY = cos(rotationY) - cos(horizontalBubbleAngle);
    horizontalBubbleAngle += map(deltaRotationY,-2,2,-5,5)

    let a = -cos(rotationZ)*sin(rotationY)-sin(rotationZ)*sin(rotationX)*cos(rotationY);
    let b = -sin(rotationZ)*sin(rotationY)+cos(rotationZ)*sin(rotationX)*cos(rotationY);
    let c = -cos(rotationX)*cos(rotationY);



    fill(0,0,255);
    //ellipse(screen.width*map(cos(horizontalBubbleAngle+90),-1,1,0.05,0.95),screen.height/2, 80, 80);
    ellipse(screen.width*(b+1/2),screen.height/2, 80, 80);
    //Vertical bubble
    //OK
    let deltaRotationX = sin(rotationX) - sin(verticalBubbleAngle);
    verticalBubbleAngle += map(deltaRotationX,-2,2,-5,5)

    fill(255,0,0);
    ellipse(screen.width/2, screen.height*map(cos(verticalBubbleAngle+90),-1,1,0.05,0.95), 80, 80);
        
    if(DEBUG)
    {
      fill(0,0,0);
      text("RotationX : "+a,50,40);
      text("RotationY : "+b,50,70);
      text("RotationZ : "+c,50,100);

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