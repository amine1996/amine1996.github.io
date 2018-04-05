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
    rotationVector = getWGSRotationVector();

    //Horizontal bubble
    fill(0,0,255);
    ellipse(screen.width*(rotationVector.y+1/2),screen.height/2, 80, 80);
    
    //Vertical bubble
    fill(255,0,0);
    ellipse(screen.width/2, screen.height*(rotationVector.x+1/2), 80, 80);
  }
  else
  {
    text("No rotation found",10,30);
  }
}

/*
 * http://wiki.cs.vsb.cz/images/archive/6/69/20160405105728!TAMZ-new-L8.pdf
 * Page 5
 */
function getWGSRotationVector()
{
  let Rx = -cos(rotationZ)*sin(rotationY)-sin(rotationZ)*sin(rotationX)*cos(rotationY);
  let Ry = -sin(rotationZ)*sin(rotationY)+cos(rotationZ)*sin(rotationX)*cos(rotationY);
  let Rz = -cos(rotationX)*cos(rotationY);

  return createVector(Rx,Ry,Rz);
}