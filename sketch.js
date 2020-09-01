

var object1, object2, object3, object4;

function setup() {
  createCanvas(800,400);
  object1 = createSprite(400, 200, 50, 100);
  object1.shapeColor = "green";

  object2 = createSprite(600,200,100,50);
  object2.shapeColor = "green";

  object3 = createSprite(200,200,50,100);
  object3.shapeColor = "green";
  
  object4 = createSprite(100,400,100,50);
  object4.shapeColor = "green";



}

function draw() {
  background("black");  
  object2.y = mouseY;
  object2.x = mouseX;

  if (touching(object3, object2))
  {

    object2.shapeColor = "blue";
    object3.shapeColor = "blue";

  }

  else{
    object2.shapeColor = "green";
    object3.shapeColor = "green";

  }

  drawSprites();
}


