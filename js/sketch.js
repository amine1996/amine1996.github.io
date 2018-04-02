function setup() 
{
  createCanvas(screen.width, screen.height);
  background(255,255,255);   
}

function draw() 
{
  background(255,255,255);

  textSize(20);

  if(rotationX != null && rotationY != null && rotationZ != null)
  {
    fill(255,0 ,255);
    ellipse(screen.width*map(cos(rotationX),-1,1,0,1), screen.height/2, 80, 80);
    /*

    fill(128,0,0);
    textSize(20);

    text(rotationX,10,30);
    text(rotationY,10,50);
    text(rotationZ,10,70);
    */
  }
  else
  {
    text("No rotation found",10,30);
  }
}