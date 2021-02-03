var form
var playerC, player, gameS = 0;
var gameObj
var database
var astroImg, bgImg, bg , smallObstacleImg, bigObstacleImg, fireImg
var astro,astro1, astro2;
var allPlayers


function preload(){
  astroImg = loadImage("images/1.png");
  bgImg = loadImage("images/5.jpg");
  
}

function setup() {
  createCanvas(displayWidth,displayHeight-120);
  database = firebase.database();

  gameObj = new Game();
  gameObj.start();
  gameObj.readGameState();


}

function draw(){
  if(playerC === 2){
    gameObj.writeGameState(1)
  }

  if(gameS === 1){
    gameObj.play()
    drawSprites();
    console.log(gameS)
  }
  }