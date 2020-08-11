

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50,200,50,50);
  thickness=random(52,83);
  speed=random(233,290);
  weight=random(32,48);
  wall=createSprite(1200,200,thickness,height/2);
  bullet.velocityX=speed;
  wall.shapeColor=(80,80,80);
}

function draw() {
  background(255,255,255);  
  

  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
  }

  if(damage>=10){
    wall.shapeColor="red";
  }
  if(damage<10){
    wall.shapeColor="green";
  }
 

  hasCollided();
  drawSprites();
  
}

function hasCollided(lbullet, lwall){
bulletRightEdge=bullet.x + bullet.width
wallLeftEdge=wall.x;
if(bulletRightEdge>=wallLeftEdge){
return true
}

return false
}
