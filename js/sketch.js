//Last Y rotation
var horizontalBubbleAngle;

//Last X rotation
var verticalBubbleAngle;

const DEBUG = true;

function setup() 
{
  createCanvas(screen.width, screen.height);

  background(255,255,255);   
  angleMode(DEGREES);

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
    if(rotationY < 45 && rotationY > -45)
    {
      let deltaRotationY = sin(rotationY) - sin(horizontalBubbleAngle);
      horizontalBubbleAngle += map(deltaRotationY,-2,2,-5,5)
    }

    fill(0,0,255);
    ellipse(screen.width*map(cos(horizontalBubbleAngle+90),-1,1,0.05,0.95),screen.height/2, 80, 80);

    //Vertical bubble
    //OK
    let deltaRotationX = sin(rotationX,-45,45) - sin(verticalBubbleAngle);
    verticalBubbleAngle += map(deltaRotationX,-2,2,-5,5)

    fill(255,0,0);
    ellipse(screen.width/2, screen.height*map(cos(verticalBubbleAngle+90),-1,1,0.05,0.95), 80, 80);

        
    if(DEBUG)
    {
      fill(0,0,0);
      text("RotationX : "+rotationX,50,40);
      text("RotationY : "+rotationY,50,70);
      text("RotationZ : "+rotationZ,50,100);

      text("verticalBubbleAngle : "+verticalBubbleAngle,50,140);
      text("horizontalBubbleAngle : "+horizontalBubbleAngle,50,170);
    }
  }
  else
  {
    text("No rotation found",10,30);
  }
}