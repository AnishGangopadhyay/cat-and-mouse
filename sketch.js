var cat
var mI1
var mI2
var mI3
var mI4
var catImg1
var catImg2
var mouse
var bgImg
var catImg3
var catImg4

function preload() {
    //load the images here
bgImg = loadImage("images/garden.png")
catImg1 = loadImage("images/cat1.png")
catImg2 = loadImage("images/cat2.png")
catImg3 = loadImage("images/cat3.png")
catImg4 = loadImage("images/cat4.png")
mI1 = loadImage("images/mouse1.png")
mI2 = loadImage("images/mouse2.png")
mI3 = loadImage("images/mouse3.png")
mI4 = loadImage("images/mouse4.png")
}

function setup(){
    createCanvas(800,600);
    //create tom and jerry sprites here
cat = createSprite(600,480,10,10)
cat.addImage("cI1", catImg1)
cat.scale = 0.2

mouse = createSprite(50,480,10,10)
mouse.addImage("mouseImg1", mI1)
mouse.scale = 0.1

}

function draw() {

    background(bgImg);
   if(cat.x - mouse.x < (cat.width - mouse.width)/2 ){
       cat.velocityX = 0
       cat.addAnimation("catRest",catImg4)
       cat.changeAnimation("catRest")
       mouse.addAnimation("mouseRest", mI4)
       mouse.changeAnimation("mouseRest")
   }
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}

setup();


function keyPressed(){

    if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing", mI2)
    mouse.changeAnimation("mouseTeasing")
    mouse.frameDelay = 25
    }

    if(keyCode === LEFT_ARROW){
        cat.addAnimation("catRunning",catImg2)
        cat.changeAnimation("catRunning")
        cat.addAnimation("catRunning")
        cat.velocityX = -3
    }
  


}
keyPressed();
