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
    let rotationVector = getWGSRotationVector();

    //Horizontal bubble
    fill(0,0,255);
    horizontalBubbleRy += (rotationVector.y - horizontalBubbleRy)/10;
    ellipse(screen.width*(horizontalBubbleRy+1/2),screen.height/2, 80, 80);
    
    //Vertical bubble
    fill(255,0,0);
    verticalBubbleRx += (rotationVector.x - verticalBubbleRx)/10;
    ellipse(screen.width/2, screen.height*(verticalBubbleRx+1/2), 80, 80);

    if(DEBUG)
    {
      text("rotVecX "+rotationVector.x,10,40);
      text("rotVecY "+rotationVector.y,10,70);
      text("rotVecZ "+rotationVector.z,10,100);

      text("alpha "+rotationZ,10,140);
      text("beta "+rotationX,10,170);
      text("gamma "+rotationY,10,200);
    }
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
  let ori = deviceOrientation(e); 

  let Rx = -cos(ori.alpha)*sin(ori.gamma)-sin(ori.alpha)*sin(ori.beta)*cos(ori.gamma);
  let Ry = -sin(ori.alpha)*sin(ori.gamma)+cos(ori.alpha)*sin(ori.beta)*cos(ori.gamma);
  let Rz = -cos(ori.beta)*cos(ori.gamma);

  //Remap values from -0.5 to 0.5
  Rx = map(Rx,-1,1,-0.5,0.5);
  Ry = map(Ry,-1,1,-0.5,0.5);
  Rz = map(Rz,-1,1,-0.5,0.5);

  return createVector(Rx,Ry,Rz);
}