var obj1, obj2, obj3, obj4;


function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400,200,60,30)
  movablerect=createSprite(200,150,30,60);
  obj1 = createSprite(100, 100, 50,50);
  obj2 = createSprite(200, 100, 50,50);
  obj3 = createSprite(300, 100, 50,50);
  obj4 = createSprite(400, 100, 50,50);
  
  obj1.shapeColor="green";
  obj2.shapeColor="green";
  obj3.shapeColor="green";
  obj4.shapeColor="green";
  obj1.velocityX=2;
}

function draw() {
  background(55,255,255);
 
  movablerect.x=World.mouseX
  movablerect.y=World.mouseY 
  //isTouching();
  if(isTouching(movablerect,obj2 )){
    movablerect.shapeColor="blue";
    obj2.shapeColor="blue";

  }
  else{
    movablerect.shapeColor="green";
    obj2.shapeColor="green";
  }
   bounceOff(obj1,obj2);
  drawSprites();
}

