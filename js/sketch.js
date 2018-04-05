//Last orientation (PORTRAIT or LANDSCAPE)
var lastOrientation;

//Last Y rotation
var horizontalBubbleRy;

//Last X rotation
var verticalBubbleRx;

var promise;

const DEBUG = true;

function setup() 
{
  createCanvas(screen.width, screen.height);

  background(255,255,255);   
  angleMode(DEGREES);

  horizontalBubbleRy = 0; 
  verticalBubbleRx = 0;

  textSize(20);

  promise = FULLTILT.getDeviceOrientation({'type': 'world'});
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
    horizontalBubbleRy += (rotationVector.y - horizontalBubbleRy)/10;
    ellipse(screen.width*(horizontalBubbleRy+1/2),screen.height/2, 80, 80);
    
    //Vertical bubble
    fill(255,0,0);
    verticalBubbleRx += (rotationVector.x - verticalBubbleRx)/10;
    ellipse(screen.width/2, screen.height*(verticalBubbleRx+1/2), 80, 80);

    if(DEBUG)
    {
      promise
      .then(
        function(deviceOrientation) {
          var quaternion = deviceOrientation.getScreenAdjustedQuaternion();
          var matrix = deviceOrientation.getScreenAdjustedMatrix();
          var euler = deviceOrientation.getScreenAdjustedEuler();
     
          // Do something with our quaternion, matrix, euler objects... 
          console.debug(quaternion);
          console.debug(matrix);
          console.debug(euler);
        }
      ).catch(
        function(message) {
          // Device Orientation Events are not supported
      
          // Implement manual fallback controls instead...
        }
      );

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
  let Rx = -cos(rotationZ)*sin(rotationY)-sin(rotationZ)*sin(rotationX)*cos(rotationY);
  let Ry = -sin(rotationZ)*sin(rotationY)+cos(rotationZ)*sin(rotationX)*cos(rotationY);
  let Rz = -cos(rotationX)*cos(rotationY);

  //Remap values from -0.5 to 0.5
  Rx = map(Rx,-1,1,-0.5,0.5);
  Ry = map(Ry,-1,1,-0.5,0.5);
  Rz = map(Rz,-1,1,-0.5,0.5);

  return createVector(Rx,Ry,Rz);
}