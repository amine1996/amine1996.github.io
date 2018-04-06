//Last Y rotation
var horizontalBubbleAngle;

//Last X rotation
var verticalBubbleAngle;

//Bubble size
const radBubble = 80;

//Images
var bubbleImg;
var backgroundImg;

//Colors
var barColor;
var textColorCorrectAngle;
var textColorWrongAngle;

function preload()
{
  bubbleImg = loadImage("/images/bubble.png");
  backgroundImg = loadImage("/images/background.jpg");
}

function setup() 
{
  createCanvas(screen.width, screen.height);

  angleMode(DEGREES);

  horizontalBubbleAngle = 0; 
  verticalBubbleAngle = 0;

  textSize(20);

  bubbleImg.resize(radBubble,0);

  barColor = color(87,68,46);
  textColorCorrectAngle = color(0,255,0);
  textColorWrongAngle = color(255,255,255);
}

function draw() 
{
  clear();
  background(backgroundImg);

  if(rotationY != null && rotationX != null)
  {
    //Horizontal bar
    fill(barColor);

    const startHorizontalBarX = screen.width*0.15-radBubble/2;
    const startHorizontalBarY = screen.height-(screen.height* 1 / 6)-radBubble/2;
    const horizontalBarLength = screen.width*0.85+radBubble/2 - (screen.width*0.15-radBubble/2);
    rect(startHorizontalBarX, startHorizontalBarY, horizontalBarLength,radBubble, 40);

    //Vertical bar
    const startVerticalBarX = screen.width-(screen.width*0.15)-radBubble/2;
    const startVerticalBarY = (screen.height*0.75-radBubble/2)*0.10;
    const verticalBarLength = (screen.height*0.75-radBubble/2)*0.90;
    rect(startVerticalBarX,startVerticalBarY, radBubble, verticalBarLength, 40);

    //Horizontal bubble
    let deltaRotationY = sin(rotationY) - sin(horizontalBubbleAngle);
    horizontalBubbleAngle += map(deltaRotationY,-2,2,-5,5)

    const horizontalBubbleX = screen.width*map(cos(horizontalBubbleAngle+90),-1,1,0.15,0.85)-radBubble/2;
    const horizontalBubbleY = screen.height-(screen.height* 1 / 6)-radBubble/2;
    image(bubbleImg,horizontalBubbleX,horizontalBubbleY);

    //Vertical bubble
    let deltaRotationX = sin(rotationX) - sin(verticalBubbleAngle);
    verticalBubbleAngle += map(deltaRotationX,-2,2,-5,5)

    const verticalBubbleX = screen.width-(screen.width*0.15)-radBubble/2;
    const verticalBubbleY = (screen.height*0.75-radBubble/2)*map(cos(verticalBubbleAngle+90),-1,1,0.10,0.90);
    image(bubbleImg,verticalBubbleX,verticalBubbleY);

   
    const colorAngleX = rotationX <= 2 && rotationX >=-2 ? textColorCorrectAngle : textColorWrongAngle;
    const colorAngleY = rotationY <= 2 && rotationY >=-2 ? textColorCorrectAngle : textColorWrongAngle;

    fill(colorAngleX);
    text("Angle X: "+Math.round(rotationX * 10) / 10 +"°",(screen.width-(screen.width*0.15))-200,(screen.height*0.75+radBubble/2)*0.5);

    fill(colorAngleY)
    text("Angle Y: "+Math.round(rotationY * 10) / 10+ "°",screen.width*0.5 -radBubble,(screen.height-(screen.height*0.25 / 2))-radBubble);
  }
  else
  {
    text("No rotation found",10,30);
  }
}