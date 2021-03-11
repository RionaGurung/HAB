var database;

var position;

var bg;

var balloon, balloon1, balloon2, balloon3;

function preload(){

  bg = loadImage("Background.png");

  //balloon0 = loadAnimation("Hot Air Balloon-01.png", "Hot Air Balloon-02.png", "Hot Air Balloon-03.png");

  balloon1 = loadImage("Hot Air Balloon-01.png");
  balloon2 = loadImage("Hot Air Balloon-02.png");
  balloon3 = loadImage("Hot Air Balloon-03.png");
}

function setup() {

  createCanvas(1300, 500);

  balloon = createSprite(100, 200, 20, 20);
  balloon.addImage("balloon", balloon1);
  balloon.scale = 0.5;

}

function draw() {

  background(bg);  

  fill("black");
  stroke(2)
  textSize(18);
  textFont("timesnewroman");
  text("Use Arrow Keys To Move", width/2, height - 460);

  /*if(keyDown(LEFT_ARROW)){
  
    balloon.x -= 10;
  }
  
  else if(keyDown(RIGHT_ARROW)){
  
    balloon.x += 10;
  }
  
  else if(keyDown(UP_ARROW)){
  
    balloon.y -= 10;
  }
  
  else if(keyDown(DOWN_ARROW)){
  
    balloon.y += 10;
  }*/
  
  drawSprites();
}

function keys(){

  if(keyIsDown(RIGHT_ARROW) && balloon.index !== null){

    balloon.x +=10
    balloon.addAnimation("balloon1", balloon1);
    balloon.updatePosition();
  }
  else if(keyIsDown(LEFT_ARROW && balloon.index !== null)){

    balloon.x -=10
    balloon.addAnimation("balloon2", balloon2);
    balloon.updatePosition();
  }

  else if(keyIsDown(UP_ARROW && balloon.index !== null)){

    balloon.y -=10
    balloon.addAnimation("balloon3", balloon3);
    balloon.updatePosition();
  }

  else if(keyIsDown(DOWN_ARROW && balloon.index !== null)){

    balloon.y +=10
    balloon.addAnimation("balloon1", balloon1);
    balloon.updatePosition();
  
  }
}
