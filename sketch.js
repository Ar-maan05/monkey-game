var monkey, monkey_running;
var ground;
var banana, bananaImage, obstacle, obstacleImage;
var obstacle;
var foodGroup, obstacleGroup;
var score;
var survivalTime;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png");

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}

function setup() {
  createCanvas(600, 400);

  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(400, 350, 1200, 5);
  ground.velocityX = -4;
  ground.x = ground.width / 2;

  foodGroup = new Group();
  obstacleGroup = new Group();

}


function draw() {
  background(255);

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }
  
  if (keyDown("space") && monkey.y >= 310) {
    monkey.velocityY = -13;
  }
    monkey.velocityY = monkey.velocityY + 0.5;
  
  monkey.collide(ground);
  
  stroke("white");
  textSize(20);
  fill(255);
  text("score" + score, 500, 50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount / frameRate());
  text("Survival Time: " + survivalTime, 200,50);
  
  bananas();
  obstacles();
  
  drawSprites();

  console.log(monkey.y);

}

function bananas() {
  if (frameCount % 80 === 0) {
    banana = createSprite(600, 100, 10, 10);
    banana.y = Math.round(random(120, 200));
    banana.velocityX = -4;
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.lifetime = 150;

    foodGroup.add(banana);
  }
}

function obstacles(){
  if(frameCount % 300 === 0){
    obstacle = createSprite(600, 315, 20, 20);
    obstacle.velocityX = -4;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.175;
    obstacle.lifetime = 150;
    
    obstacleGroup.add(obstacle);
  }
}
