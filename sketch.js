
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var land;
var landImg;
var obstacle;
var cloud,cloud1;
var cloudImg;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  landImg = loadImage("land.jpg")
 cloudImg=loadImage("cloud.png")
}



function setup() {
  createCanvas(500,400)
   //creating monkey
monkey=createSprite(80, 315, 20, 20);
monkey.addAnimation( "moving", monkey_running) ;
monkey.scale=0.1

cloud=createSprite(600,random(30,100),80,50)
  cloud.addImage(cloudImg)
  cloud.scale=0.2
  cloud.velocityX=-2;
  
  cloud1=createSprite(550,random(60,200),80,50)
  cloud1.addImage(cloudImg)
  cloud1.scale=0.3
  cloud1.velocityX=-2;
  
  land= createSprite(400,375,900,20);
  
   land.x=land.width/2;
  land.addImage(landImg);
  land.scale=0.5
  
  
  survivalTime=0;
}



function draw() {
   background("lightBlue");

  
    if (land.x < 0) {
      land.x = land.width / 2;
      console.log(land.x)
    }
  
   monkey.velocityY = monkey .velocityY + 0.8
  monkey.collide(land);
  //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -8  ; 
    }
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+survivalTime,300,50)
  
  
  if (cloud.x<-50){
     cloud.x=600
    cloud.y=random(30,150)
  cloud.scale=0.2
  cloud.velocityX=-2;
      }
  
  if (cloud1.x<-70){
     cloud1.x=600
    cloud1.y=random(30,150)
  cloud1.scale=0.3
  cloud1.velocityX=-2;
      }
  
  bananas();
  obstacles();
  drawSprites();
}


function bananas() {
  if (frameCount % 80 === 0) {
 banana = createSprite(600,200,20,5)
     banana.scale=0.1
    banana.velocityX=-7;
    banana.addImage(bananaImage)
    
  }
}

function obstacles(){
  if(frameCount % 300 === 0){
    obstacle = createSprite(600,310,30,10)
    obstacle.addImage(obstacleImage)
     obstacle.velocityX=-4;
    obstacle.scale=0.2
     }
}


