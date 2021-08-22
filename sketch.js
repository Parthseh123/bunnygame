var player, playerimg;
var edges;
var obs1;
var obs2;
var obs3;
var obs4;
var obs5;
var obs6;
var obs7;
var obs8;
var obs9;
var obs10;
var obs11;
var obs12;
var obs13;
var obs14;
var obs15;
var obs16;
var target, targetimg;
var backgroundimg;


function preload() {
  //load game assets
  targetimg = loadImage("carrot.png")
  playerimg = loadImage("bunnyimg.png")
  backgroundimg = loadImage("bg.png")
  snakeimg = loadImage("snake.png")
}


function setup() {
  createCanvas(1350, 600)

  snakesGroup = new Group();

  bg = createSprite(700,300);
  bg.scale=6;
  bg.addImage(backgroundimg);

  edges = createEdgeSprites();

  player = createSprite(50, 500);
  player.addImage(playerimg);
  player.scale = 0.35;
  player.setCollider("rectangle",0,0,100,250)

  target = createSprite(1200, 100);
  target.addImage(targetimg)
  target.scale = 0.3;

  obs1 = createSprite(300, 300, 120, 30);
  obs1.shapeColor = "brown";


  obs2 = createSprite(550, 300, 120, 30);
  obs2.shapeColor = "brown";

  obs3 = createSprite(750, 300, 120, 30);
  obs3.shapeColor = "brown";

  obs4 = createSprite(950, 300, 120, 30);
  obs4.shapeColor = "brown";

  obs5 = createSprite(1200, 300, 120, 30);
  obs5.shapeColor = "brown";


  obs6 = createSprite(400, 200, 120, 30);
  obs6.shapeColor = "brown";

  obs7 = createSprite(600, 200, 120, 30);
  obs7.shapeColor = "brown";

  obs8 = createSprite(800, 200, 120, 30);
  obs8.shapeColor = "brown";

  obs9 = createSprite(1000, 200, 120, 30);
  obs9.shapeColor = "brown";

  obs10 = createSprite(200, 200, 120, 30);
  obs10.shapeColor = "brown";


}

function draw() {
  background("green");

  player.bounceOff(edges[0]);
  player.bounceOff(edges[1]);
  player.bounceOff(edges[2]);
  player.bounceOff(edges[3]);

  if (keyDown("down")) {
    player.y += 3
  };

  if (keyDown("up")) {
    player.y -= 3
  };

  if (keyDown("left")) {
    player.x -= 3
  };

  if (keyDown("right")) {
    player.x += 3
  };

  obs1.bounceOff(edges[0]);
  obs1.bounceOff(edges[1]);

  obs2.bounceOff(edges[0]);
  obs2.bounceOff(edges[1]);

  if (player.isTouching(obs1)) {
    player.collide(obs1)

    let b = confirm("😢😭😭You Lost , Do you want to save your progress");
    console.log(b);
    player.x = 120
    player.y = 520
  };


  if (player.isTouching(obs2)) {
    player.collide(obs2)

    let b = confirm("😢😭😭You Lost , Do you want to save your progress");
    console.log(b);
    player.x = 120
    player.y = 520

  };


  if (player.isTouching(obs3)) {
    player.collide(obs3)
    let b = confirm("😢😭😭You Lost , Do you want to save your progress");
    console.log(b);
    player.x = 120
    player.y = 520
  };


  if (player.isTouching(obs4)) {
    player.collide(obs4)
    let b = confirm("😢😭😭You Lost , Do you want to save your progress");
    console.log(b);
    player.x = 120
    player.y = 520
  };

  if (player.isTouching(obs5)) {
    player.collide(obs5)
    let b = confirm("😢😭😭You Lost , Do you want to save your progress");
    console.log(b);
    player.x = 120
    player.y = 520
  };

  if (player.isTouching(obs6)) {
    player.collide(obs6)
    let b = confirm("😢😭😭You Lost , Do you want to save your progress");
    console.log(b);
    player.x = 120
    player.y = 520
  };

  if (player.isTouching(obs7)) {
    player.collide(obs7)
    let b = confirm("😢😭😭You Lost , Do you want to save your progress");
    console.log(b);
    player.x = 120
    player.y = 520
  };

  if (player.isTouching(obs8)) {
    player.collide(obs8)
    let b = confirm("😢😭😭You Lost , Do you want to save your progress");
    console.log(b);
    player.x = 120
    player.y = 520
  };

  drawSprites();

  generatesnakes();
  for(var i = 0 ; i< (snakesGroup).length ;i++){
    var temp = (snakesGroup).get(i) ;

  if(temp.isTouching(player)){
  player.collide(temp);
  let b = confirm("😢😭😭You Lost , Do you want to save your progress");
  console.log(b);
  player.x = 120
  player.y = 520
  player.velocityX = 0;
  temp.destroy();
   break;
  }}

}

function generatesnakes() {
  if(frameCount % 30 === 0){
    var obstacle = createSprite(1400,random(400,445), 10, 40);
    obstacle.velocityX = -5;
    obstacle.scale = random(0.25,0.40,0.30,0.5);
    obstacle.addImage(snakeimg)

    obstacle.lifetime = 500;
    snakesGroup.add(obstacle);
}}
