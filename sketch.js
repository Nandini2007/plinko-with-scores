var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var gameState = "start";
var divisionHeight=200;
var score =0;
var scoreIn = 0;
var opts;
function preload(){
  bgImg = loadImage("backgroundGIF.gif");
}
function setup() {
  createCanvas(700, 650);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    { 
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  // background
  if(gameState === "start"){
    if(frameCount%120 === 0){
      background(random(0, 255), random(0, 255), random(0, 255));
    }
    
  }
  else if(gameState === "play"){
     background("black");
  }

  else{
    background(bgImg);
  }

 Engine.update(engine);

 // play gameState condition s
 if(gameState === "play"){


   // creating plinkos
 for (var i = 0; i < plinkos.length; i++) 
    {
    plinkos[i].display();
    }


   // creating particles
 for (var j = 0; j < particles.length; j++)
    {
    particles[j].display();
    }


   // creating divisions
 for (var k = 0; k < divisions.length; k++)
    {
    divisions[k].display();    
    }
   fill("white")
   text("score : "+score,20,20)
}
// gameState start conditions;
 if(gameState === "start"){
  
  // creating start button
   fill("blue")
   rect(width-100,height-100,50,30);
   textSize(14)
   fill("yellow")
  

   // rules
   textFont("null")
  textSize(30);
  fill("black")
  text(" (◕◡◕) The game of plinkos - made by Nandini !",10,30)
  text("We have simple rules : ",10,100);
  text("1. Click above the plinkos to release balls. ",10,140)
  text("2. you have only three balls.",10,172);
  text("3. the balls will move down facing several ",10,204);
  text("    blockages by plinkos.",10,236);
  text("4. the ball will move in tubes each tube will",10,268);
  text("    earn you some score. ",10,292)
  text("5. try to put the balls in the tube that gives ",10,324)
  text("    you highest score",10,356)
  fill("brown")
  text("6. you will have to wait for first ball to move in ",10,386)
  text("    the tube to release second ball ",10,386 + 32)
    if(frameCount%60 === 0){
      fill("green")
       textFont("algerian")
    //textFill(random(0, 255), random(0, 255), random(0, 255));
    text("to begin press the blue button 👉 ",40,570)
    }
  
 }



// ending game
  if(scoreIn === 3)
  {
  fill("green");
  textSize(40)
  text("No more balls 😃",width/2-100,30)
  gameState = "end";
  }



  /////////// SCORING ball 1
  if(particles.length > 0  && particles[0].body.position.x<0 && particles[0].body.position.y>486 && scoreIn < 1){
    score = score + 0;
    scoreIn = scoreIn + 1
   }
  if(particles.length > 0 && particles[0].body.position.x>0 && particles[0].body.position.x<78 && particles[0].body.position.y>486 && scoreIn < 1){
    score = score + 50;
    scoreIn = scoreIn + 1
   }
   if(particles.length > 0 && particles[0].body.position.x>94 && particles[0].body.position.x<157 && particles[0].body.position.y>486 && scoreIn < 1){
    score = score + 100;
    scoreIn = scoreIn + 1
   }
   if(particles.length > 0 && particles[0].body.position.x>173 && particles[0].body.position.x<237 && particles[0].body.position.y>486 && scoreIn < 1){
    score = score + 200;
    scoreIn = scoreIn + 1
   }
   if(particles.length > 0 && particles[0].body.position.x>253 && particles[0].body.position.x<316 && particles[0].body.position.y>486 && scoreIn < 1){
    score = score + 500;
    scoreIn = scoreIn + 1
   }
   if(particles.length > 0 && particles[0].body.position.x>333 && particles[0].body.position.x<397 && particles[0].body.position.y>486 && scoreIn < 1){
    score = score + 1000;
    scoreIn = scoreIn + 1
   }
   if(particles.length > 0 && particles[0].body.position.x>413 && particles[0].body.position.x<477 && particles[0].body.position.y>486 && scoreIn < 1){
    score = score + 500;
    scoreIn = scoreIn + 1
   }
   if(particles.length > 0 && particles[0].body.position.x>494 && particles[0].body.position.x<557 && particles[0].body.position.y>486 && scoreIn < 1){
    score = score + 200;
    scoreIn = scoreIn + 1
   }
   if(particles.length > 0 && particles[0].body.position.x>573 && particles[0].body.position.x<638 && particles[0].body.position.y>486 && scoreIn < 1){
    score = score + 100;
    scoreIn = scoreIn + 1
   }
   if(particles.length > 0 && particles[0].body.position.x>653 && particles[0].body.position.x<710 && particles[0].body.position.y>486 && scoreIn < 1){
    score = score + 50;
    scoreIn = scoreIn + 1
   }
   if(particles.length > 0 && particles[0].body.position.x>width  && particles[0].body.position.y>486 && scoreIn < 1){
    score = score + 0;
    scoreIn = scoreIn + 1
   }
 

   //////////////   SCORING BALL 2
   if(particles.length > 1  && particles[1].body.position.x<0 && particles[1].body.position.y>486 && scoreIn < 2){
    score = score + 0;
    scoreIn = scoreIn + 1
   }
   if(particles.length > 1 && particles[1].body.position.x>0 && particles[1].body.position.x<78 && particles[1].body.position.y>486 && scoreIn < 2){
    score = score + 50;
    scoreIn = scoreIn + 1
   }
   if(particles.length > 1 && particles[1].body.position.x>94 && particles[1].body.position.x<157 && particles[1].body.position.y>486 && scoreIn < 2){
    score = score + 100;
    scoreIn = scoreIn + 1
   }
   if(particles.length > 1 && particles[1].body.position.x>173 && particles[1].body.position.x<237 && particles[1].body.position.y>486 && scoreIn < 2){
    score = score + 200;
    scoreIn = scoreIn + 1
   }
   if(particles.length > 1 && particles[1].body.position.x>253 && particles[1].body.position.x<316 && particles[1].body.position.y>486 && scoreIn < 2){
    score = score + 500;
    scoreIn = scoreIn + 1
   }
   if(particles.length > 1 && particles[1].body.position.x>333 && particles[1].body.position.x<397 && particles[1].body.position.y>486 && scoreIn < 2){
    score = score + 1000;
    scoreIn = scoreIn + 1
   }
   if(particles.length > 1 && particles[1].body.position.x>413 && particles[1].body.position.x<477 && particles[1].body.position.y>486 && scoreIn < 2){
    score = score + 500;
    scoreIn = scoreIn + 1
   }
   if(particles.length > 1 && particles[1].body.position.x>494 && particles[1].body.position.x<557 && particles[1].body.position.y>486 && scoreIn < 2){
    score = score + 200;
    scoreIn = scoreIn + 1
   }
   if(particles.length > 1 && particles[1].body.position.x>573 && particles[1].body.position.x<638 && particles[1].body.position.y>486 && scoreIn < 2){
    score = score + 100;
    scoreIn = scoreIn + 1
   }
   if(particles.length > 1 && particles[1].body.position.x>653 && particles[1].body.position.x<710 && particles[1].body.position.y>486 && scoreIn < 2){
    score = score + 50;
    scoreIn = scoreIn + 1
   }
   if(particles.length > 1 && particles[1].body.position.x>height && particles[1].body.position.y>486 && scoreIn < 2){
    score = score + 0;
    scoreIn = scoreIn + 1
   }



  //////////////  SCORING BALL 3
  if(particles.length > 2 && particles[2].body.position.x<0  && particles[2].body.position.y>486 && scoreIn < 3){
    score = score + 0;
    scoreIn = scoreIn + 1
   }
  if(particles.length > 2 && particles[2].body.position.x>0 && particles[2].body.position.x<78 && particles[2].body.position.y>486 && scoreIn < 3){
    score = score + 50;
    scoreIn = scoreIn + 1
   }
   if(particles.length > 2 && particles[2].body.position.x>94 && particles[2].body.position.x<157 && particles[2].body.position.y>486 && scoreIn < 3){
    score = score + 100;
    scoreIn = scoreIn + 1
   }
   if(particles.length > 2 && particles[2].body.position.x>173 && particles[2].body.position.x<237 && particles[2].body.position.y>486 && scoreIn < 3){
    score = score + 200;
    scoreIn = scoreIn + 1
   }
   if(particles.length > 2 && particles[2].body.position.x>253 && particles[2].body.position.x<316 && particles[2].body.position.y>486 && scoreIn < 3){
    score = score + 500;
    scoreIn = scoreIn + 1
   }
   if(particles.length > 2 && particles[2].body.position.x>333 && particles[2].body.position.x<397 && particles[2].body.position.y>486 && scoreIn < 3){
    score = score + 1000;
    scoreIn = scoreIn + 1
   }
   if(particles.length > 2 && particles[2].body.position.x>413 && particles[2].body.position.x<477 && particles[2].body.position.y>486 && scoreIn < 3){
    score = score + 500;
    scoreIn = scoreIn + 1
   }
   if(particles.length > 2 && particles[2].body.position.x>494 && particles[2].body.position.x<557 && particles[2].body.position.y>486 && scoreIn < 3){
    score = score + 200;
    scoreIn = scoreIn + 1
   }
   if(particles.length > 2 && particles[2].body.position.x>573 && particles[2].body.position.x<638 && particles[2].body.position.y>486 && scoreIn < 3){
    score = score + 100;
    scoreIn = scoreIn + 1
   }
   if(particles.length > 2 && particles[2].body.position.x>653 && particles[2].body.position.x<710 && particles[2].body.position.y>486 && scoreIn < 3){
    score = score + 50;
    scoreIn = scoreIn + 1
   }
   if(particles.length > 2 && particles[2].body.position.x>height && particles[2].body.position.y>486 && scoreIn < 3){
    score = score + 0;
    scoreIn = scoreIn + 1
   }



   /// Score text
   if(gameState === "play"){
     textFont("null");
    fill("white");
    textSize(30)
   text("50",19,height - 10);
   text("100",98,height - 10);
   text("200",176,height - 10);
   text("500",255,height - 10);
   text("1000",326,height - 10);
   text("500",415,height - 10);
   text("200",499,height - 10);
   text("100",575,height - 10);
   text("50",654,height - 10);
   
   }
   


if(gameState === "end"){

  fill("green")
  rect(150,height-30,100,50);
  textSize(20);
  fill("black")
  text("restart",110,height-23)
  fill("brown")
  text("If you want to try again push restart button",5,height/2+50 )

  if(score < 500 ){
    textSize(40)
    fill("black")
    text("your score = "+score , width/2 - 150,height/2 - 50);
    fill("red")
    text("you could have done better 🙄",60,height/2);
  }
  if(score >= 500 && score < 2000 ){
    textSize(40)
    fill("black")
    text("your score = "+score , width/2 - 150,height/2 - 50);
    fill("brown")
    text("you did great 👍",width/2 - 130,height/2);
  }
  if(score >= 2000 ){
    textSize(40)
     fill("black")
    text("your score = "+score , width/2 - 150,height/2 - 50);
    fill("green")
    text("you are a champion 👌",80,height/2);
  }
 
  
}
if(gameState === "superEnd"){
  image(bgImg,0,0,width,height)
}

 }
 
 // draw function ends

 function mouseDragged(){

// creating particles
if(gameState === "play"){
  if(particles.length === 0){
    if( mouseY < 70 && particles.length <4){
   particles.push(new Particle(mouseX, mouseY,10));
    console.log(particles.length)
  }
  }
  if(particles.length === 1 && scoreIn === 1){
    if( mouseY < 70 && particles.length <4){
   particles.push(new Particle(mouseX, mouseY,10));
    console.log(particles.length)
  }
  }
  if(particles.length === 2 && scoreIn === 2){
    if( mouseY < 70 && particles.length <4){
   particles.push(new Particle(mouseX, mouseY,10));
    console.log(particles.length)
  }
  }
  }


 // changing gameState to play
 if(mouseX > 607 && mouseX < 658 && mouseY > 556  &&  mouseY < 587 ){

  gameState = "play"

 }

 // going to prev Screens in end state
 if(gameState === "end"){

  console.log("mouseX > ",mouseX,"mouseX < ",mouseX,"mouseY > ",mouseY,"mouseY < ",mouseY)
 
  if(mouseX > 106 && mouseX <206 && mouseY > 601 && mouseY < 651){
    scoreIn = 0;
    particles = [];
    gameState = "start"
    score = 0;
  }
  

  
   
 

 }
 }


