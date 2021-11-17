
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);

}

function draw(){
  if (keyIsDown(RIGHT_ARROW)){
    background("pink");
  }

  else {
   background ("yellow");
  }
  
  drawSprites();
}

