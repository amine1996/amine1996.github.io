//Last orientation (PORTRAIT or LANDSCAPE)
var lastOrientation;

//Last Y rotation
var horizontalBubbleRy;

//Last X rotation
var verticalBubbleRx;

function setup() 
{
  createCanvas(screen.width, screen.height);

  background(255,255,255);   
  angleMode(DEGREES);

  horizontalBubbleRy = 0; 
  verticalBubbleRx = 0;

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
    horizontalBubbleRy += constrain((rotationVector.y - horizontalBubbleRy)/5,0.05,0.1);
    ellipse(screen.width*(horizontalBubbleRy+1/2),screen.height/2, 80, 80);
    
    //Vertical bubble
    fill(255,0,0);
    verticalBubbleRx += constrain((rotationVector.x - verticalBubbleRx)/5,0.05,0.1);
    ellipse(screen.width/2, screen.height*(verticalBubbleRx+1/2), 80, 80);
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