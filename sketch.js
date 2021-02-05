var form
var playerC, player, gameS = 0;
var gameObj
var database
var astroImg, bgImg, bg , smallObstacleImg, bigObstacleImg, fireImg
var astro,astro1, astro2;
var allPlayers
var obstacleGroup;


function preload(){
  astroImg = loadImage("images/1.png");
  bgImg = loadImage("images/5.jpg");
  bigObstacleImg = loadImage("images/4.png");
  smallObstacleImg = loadImage("images/2.png");
  fireImg = loadImage("images/3.png")
  
}

function setup() {
  createCanvas(displayWidth,displayHeight-120);
  database = firebase.database();

  gameObj = new Game();
  gameObj.start();
  gameObj.readGameState();

  obstacleGroup = createGroup();

}

function draw(){
  if(playerC === 2){
    gameObj.writeGameState(1)
  }

  if(gameS === 1){
    gameObj.play()
    drawSprites();
    console.log(gameS);
    bigObstacle();
    smallObstacle();
    fireObstacle()
  }
  }

  function bigObstacle(){
    if(frameCount%100 === 0){
      var obstacle1 = createSprite(round(random(200,1250)),-90,50,50);
      obstacle1.velocityY = 7;
      obstacle1.addImage(bigObstacleImg)
      obstacle1.scale = 0.3;
      obstacleGroup.add(obstacle1);
    }
  }

  function smallObstacle(){
    if(frameCount%25 === 0){
      var obstacle2 = createSprite(round(random(200,1250)),-50,50,50);
      obstacle2.velocityY = 15;
      obstacle2.addImage(smallObstacleImg)
      obstacle2.scale = 0.1;
      obstacleGroup.add(obstacle2);
    }
  }

  function fireObstacle(){
    if(frameCount%150 === 0){
      var obstacle3 = createSprite(round(random(200,1250)),-50,50,50);
      obstacle3.velocityY = 12;
      obstacle3.addImage(fireImg)
      obstacle3.scale = 0.2;
      obstacleGroup.add(obstacle3);
    }
  }