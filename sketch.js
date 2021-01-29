var soccer;
var pingPong;
var gameState=null;
var player;
var fieldImage;
var soccerPlayerScore;
var soccerComScore;
var home;
var goal1;
var goal2;
var goal3;
var goal4,goal5,goal6;
var border1,border2,border3,border4;
var soccerBall;
var uplayer;
var d, dImage;
var dcount;
var golfButton;
var golfbg;
var golfball,ghole,gholeImage;
var golfballImage;
var holetouch;
var line;
var golfline;
var golfwall1,golfwall2;
var getback;
var rect;
var animateImage
function preload(){
fieldImage=loadImage("usefield.png")
dImage= loadImage("used.png")
golfballImage=loadImage("usegolfball.png")
golfbg=loadImage("usegolfbg.png")
gholeImage=loadImage("useghole.png")
animateImage=loadImage("animation.gif")
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  
 soccer= createButton("Soccer")

  soccer.position(width/1.5-width/2,height/2-160)

  home= createButton("Home")
  home.position(width/1.8-width/2,height/2-400)


  player=createSprite(width/1.2-width/2,height/2-340,470,15)
  player.shapeColor="yellow"

  player.visible=false;

  goal1=createSprite(width/1.2-width/2,height/2-440,10,60)
  goal1.visible=false

  goal2=createSprite(width/.858-width/2,height/2-440,10,60)
  goal2.visible=false

  goal3=createSprite(width/1-width/2,height/2-400,600,15)
goal3.visible=false

border1=createSprite(width/1.97-width/2,height/2,10,1000)
border1.visible=false

border2=createSprite(width/.68-width/2,height/2,10,1000)
border2.visible=false



goal4=createSprite(width/1.2-width/2,height/2+427,10,60)
goal4.visible=false

goal5=createSprite(width/.860-width/2,height/2+427,10,60)
goal5.visible=false

goal6=createSprite(width/1-width/2,height/2+380,600,15)
goal6.visible=false



soccerBall=createSprite(width/1-width/2,height/2,50,40)
soccerBall.visible=false
soccerBall.shapeColor="black"

uplayer=createSprite(width/1-width/2,height/2+320,300,15)
uplayer.shapeColor="yellow"

border3=createSprite(width/1-width/2,height/2+450,1900,10)
border3.visible=false;

border4=createSprite(width/1-width/2,height/2-460,1900,10)
border4.visible=false;

golfball=createSprite(width/1-width/2,height/2+340)
golfball.addImage("golf",golfballImage)
golfball.scale=.2
golfball.visible=false;

ghole=createSprite(width/.75-width/2,height/2-200)
ghole.addImage("hole of golf",gholeImage)
ghole.scale=.5
ghole.visible=false;

holetouch=createSprite(width/.76-width/2,height/2-133,20,20)
holetouch.visible=false;


d=createSprite(width/.73-width/2,height/2-400)
d.addImage("diamond",dImage)
d.scale=.3

line=createSprite(width/.76-width/2,height/2-100,10,50)
line.visible=false
line.shapeColor="black"

golfwall1=createSprite(width/1.9-width/2,height/2,10,1000)
golfwall1.visible=false
golfwall2=createSprite(width/.73-width/2,height/2,10,1000)
golfwall2.visible=false

getback=createSprite(width/1.14-width/2,height/2-100,1600,200)
getback.visible=false


rect=createSprite(width/1.040-width/2,height/2+320)
rect.addImage("player",animateImage)
rect.visible=false

  soccerPlayerScore=0
  soccerComScore=0

  golfButton= createButton("Golf")
  golfButton.position(width/1.4-width/2,height/2-160)


  player.velocityX=-12.1

  soccerBall.velocityY=-3;
soccerBall.velocityX=15;

line.velocityX=-10

dcount=10

}

function draw() {
  background("white");
textSize(50)
fill("black")
  text(": "+dcount,width/.71-width/2,height/2-392)
  uplayer.velocityX=0
  uplayer.velocityY=0
// presses
player.bounceOff(border1)
player.bounceOff(border2)



soccerBall.bounceOff(border1)
soccerBall.bounceOff(border2)
soccerBall.bounceOff(border4)
soccerBall.bounceOff(border4)

soccerBall.bounceOff(player)
soccerBall.bounceOff(uplayer)

line.bounceOff(golfwall1)
line.bounceOff(golfwall2)



uplayer.visible=false

if(gameState==="home"){
background("white")
player.visible=false
soccerBall.visible=false
golfball.visible=false
ghole.visible=false
line.visible=false;
rect.visible=false
soccer.show()
golfButton.show();
textSize(50)
fill("black")
  text(": "+dcount,width/.71-width/2,height/2-392)
}





  soccer.mousePressed(()=>{
gameState="soccer"
dcount=dcount-1
  })
  golfButton.mousePressed(()=>{
    gameState="golf"
    dcount=dcount-1
      })
  if(dcount<0){
    gameState="home"
  }


  home.mousePressed(()=>{
gameState="home"
      })



  //soccer play.
  if(gameState==="soccer"){
   
    golfButton.hide()
    textSize(50)
fill("black")
  text(": "+dcount,width/.71-width/2,height/2-392)


    background(fieldImage)
player.visible=true;
soccerBall.visible=true;
uplayer.visible=true

player.bounceOff(border1)
player.bounceOff(border2)



soccerBall.bounceOff(border1)
soccerBall.bounceOff(border2)
soccerBall.bounceOff(border4)
soccerBall.bounceOff(border4)

soccerBall.bounceOff(player)
soccerBall.bounceOff(uplayer)
// the score conditions
if(soccerBall.isTouching(goal1)||soccerBall.isTouching(goal2)||soccerBall.isTouching(goal3)){
  soccerPlayerScore=soccerPlayerScore+1
  soccerBall.x=width/1-width/2
  soccerBall.y=height/2
}
if(soccerBall.isTouching(goal4)||soccerBall.isTouching(goal5)||soccerBall.isTouching(goal6)){
  soccerComScore=soccerComScore+1
  soccerBall.x=width/1-width/2
  soccerBall.y=height/2
}

if(soccerPlayerScore>4){
  textSize(30)
  fill("red")
text("You Win.", width/1.2-width/2,height/2)
soccerComScore=0
soccerPlayerScore=0
dcount=dcount+3

}
if(soccerComScore>4){
  textSize(30)
  fill("red")
text("You lose! Best of Luck. Take another try.", width/1.2-width/2,height/2)
soccerComScore=0
soccerPlayerScore=0
dcount=dcount-1

}
if(soccerComScore>4){
  textSize(30)
  fill("red")
text("You lose! Best of Luck. Take another try.", width/1.2-width/2,height/2)
soccerComScore=0
soccerPlayerScore=0
}

soccer.hide();
fill("black")
textSize(50)
text(""+soccerPlayerScore,width/1.6-width/2,height/2+20)

text(""+soccerComScore,width/1.6-width/2,height/2-60)


//movement to our player

if((touches.length>0 && touches[0].x<width/2  )||keyDown("a")){
  uplayer.velocityX=-8
  touches=[]
}

if((touches.length>0 && (touches[0].x>width/2 && touches[0].x<width) )||keyDown("d")){
  uplayer.velocityX=8
  touches=[]
}

  }
  // soccer is finished. Now its the turn for golf
if(gameState==="golf"){
  line.bounceOff(golfwall1)
  line.bounceOff(golfwall2)
  golfball.visible=true
  line.visible=true
  soccer.hide();
  golfButton.hide();
  background(golfbg)
  ghole.visible=true;
  if(golfball.isTouching(holetouch)){
    text("You Win",width/1.1-width/2,height/2)
  }
  if(keyDown("space")|| touches.length>0){
    golfball.x=line.x
    golfball.y=line.y
    touches=[]
    
  }
  if(golfball.isTouching(getback)){
    dcount=dcount-1
    golfball.x=width/1-width/2
    golfball.y=height/2+340
  }
  if(golfball.isTouching(holetouch)){
    dcount=dcount+2
    golfball.x=width/1-width/2
    golfball.y=height/2+340
  }
  //line.velocityX=-10
  rect.visible=true
}

 drawSprites();
    
}

  