//creating variables.
var bgImg,bg;
var player,shooterImg,shooterShooting;

//loading images.
function preload(){
  bgImg = loadImage("/assets/bg.jpeg")
  shooterImg = loadImage("/assets/shooter_2.png")
  //shooterShooting = loadImage("/assets/shooter_3.png")
}

function setup() {

  //creating canvas.
   createCanvas(windowWidth, windowHeight);
   
   //creating sprites and adding Image to the sprite.
   player = createSprite(displayWidth-1150,displayHeight-300,50,50);
   player.addImage(shooterImg);
   player.scale = 0.5;

   //setting the coolider radius and making it visible.
   //player.setCollider("rectangle",0,0,100,100);
   //player.debug = true;
    
   //creating and adding image to the background.
   bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
   bg.addImage(bgImg),
   bg.scale = 1.1;


}

function draw(){
background(0);


drawSprites();

}