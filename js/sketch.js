function setup() 
{
    background(255,255,255);   
}

function draw() 
{
  background(255,255,255);

  fill(255,255,255);
  ellipse(50, 50, 80, 80);

  fill(255,0,0);
  textSize(20);
  if(rotationX != null && rotationY != null && rotationZ != null)
  {
    text(rotationX,10,30);
    text(rotationY,10,50);
    text(rotationZ,10,70);
  }
  else
  {
    text("No rotation found",10,30);
  }
}