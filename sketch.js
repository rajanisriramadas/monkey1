
var monkey , monkey_running, ground;
var banana ,bananaImage, obstacles, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(800,400);
  
monkey = createSprite(50,330,20,20);
  monkey.addAnimation("jumping",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,1300,20);
  ground.x = ground.width/2;
  ground.velocityX = -4;
  
  
  
}


function draw() {
  
  background("lime");
  
  textSize(20);
  fill("black");
 
   score=Math.ceil(frameCount/frameRate());
   text("Score: "+score,250,20);
  
  console.log(frameRate())
  
  if(keyDown("space"))
    {
      monkey.velocityY=-13;
    }
  
  monkey.velocityY = monkey.velocityY+0.8;
  
  
  if(ground.x<0)
    {
      ground.x=ground.width/2;
    }
  
  spawnBanana();
  spawnObstacles();
  
  monkey.collide(ground);

  drawSprites();
  
 
}

function spawnObstacles()
{
  if(frameCount%300===0)
    {
      obstacles = createSprite(400,325,20,20);
      obstacles.addImage(obstacleImage);
      obstacles.velocityX=-4;
      obstacles.scale = 0.1;
      obstacles.lifetime = 150;
    }
   
}

function spawnBanana()
{
  if(frameCount%90===0)
    {
      banana = createSprite(400,100,30,30);
      banana.velocityX = -3;
      banana.addImage(bananaImage);
      banana.y = Math.round(random(50,200));
      banana.scale = 0.1;
      banana.lifetime = 150;
    
    }
}






