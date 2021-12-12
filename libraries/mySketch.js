var scene1 = true; //Start Screen
var scene2 = false;//Home Screen
var scene3 = false;//Tom Screen
var scene4 = false;//Bubble Screen
var scene5 = false;//Morty Screen 
let sceneCounter = 1; 
var jerry;
let bg;
var s;
var score = 0;

let j;

/////

var i=0;
var x1=710;
var y1=700;
var go=0;
var arr=[];
var shooting;
var bulletx=1000;
var bullety=1000;
  //

function preload() {
  TJ = loadImage("tomBG.jpg"); //All Background Images TV Show settings 
  PPG = loadImage("PPG.jpeg");
  RM = loadImage("rick&morty.jpeg");


  tom = loadImage("tom.png"); //Pictures for Character Selection screen 
  bubbles = loadImage("bubbles.png");
  morty = loadImage("morty.png");

  xirod = loadFont("xirod.ttf"); //Title Font
  start = loadImage("startbutton.png");

//   jerry = createSprite(305, 300, 100, 100);
//   //jerry.addImage(loadImage("jerry2.png"));

//   jerry2 = createSprite(1005, 300);
//   jerry2.addImage(loadImage("jerry2.png"));

//   jerry3 = createSprite(1605, 300);
//   jerry3.addImage(loadImage("jerry2.png"));
}


function setup() {
  createCanvas(1920,1080);
  background(115);
}


function draw() {
  if (scene1 == true) //Start Screen
  {
   textSize(125);
   textFont(xirod);
   text('THE GREAT WATER', 70, 340);
   text('BALLOON FIGHT', 220, 440);
   image(start, 630,500, 600, 250); //Start button
  }

  if (scene2 == true) //Home Screen
  {
    textSize(125);
    textFont(xirod);
    background(115);
    fill(0);
    text('CHOOSE YOUR', 250, 300);
    text('CHARACTER', 350, 400);
    strokeWeight(5);
    stroke(0);

    fill(242,103,43);
    rect(105,500,500,500);   //Tom Character Selection
    image(tom, 105, 500, 500, 500);

    fill(119,213,241);
    rect(710, 500, 500,500); //Bubbles Character Selection
    image(bubbles, 710, 500, 500, 500);

    fill(127,193,67);
    rect(1315,500,500,500);   //Morty Character Selection
    image(morty, 1365, 550, 400, 400);
  }

  if (scene3 == true) //Tom Screen
  {
    scene2 = false; 
    background(TJ);
    // image(tom,710,700,500,500);
    drawSprites();
    // sprite.shoot();
     gun();
    shotdisplay(); 
     
   enemy();
  
  }
  else if (scene4 == true) //Bubbles Screen
  {
  background(PPG);
  }
   else if (scene5 == true) //Morty Screen
  {
  background(RM);
  }


}



function mousePressed(){
  if (scene1 == true)
  {
   if (((mouseX > 630) && (mouseX < 1230)) && ((mouseY > 500) && (mouseY < 750)))  //Start Button
   {
        scene2 = true;
   }
   if (((mouseX > 105)&&(mouseX < 605)) && ((mouseY > 500) && (mouseY < 1000 )))  //Tom Button
   {
        scene3 = true;
   }
  //  // // else if ((mouseX<  )&&(mouseX>)&& (mouseY<  )&&(mouseY>  ))  Bubble Button
  //  // {
  //       //scene4 = true;
  //  // }
  //  // // else if ((mouseX<  )&&(mouseX>)&& (mouseY<  )&&(mouseY>  ))  Morty Button
  //  // {
  //       //scene5 = true;
  //  // }
   // Turn Scene1 Off 
       // scene1 = false;
  }

//   function score()
//   {
//     score = 0;
//     strokeWeight(5);
//     rect(105,900,200,100);
//   }


}

// class balloon{
  
//   constructor(x,y){
//     this.xpos = mouseX;
//     this.ypot = mouseY;
//      this.sprite = createSprite(1000,1000);
//      sprite.addImage(loadImage("waterBalloon.png"));
  
// }


//   shoot(){

//   bullet.velocity.x = random(-5, 0);
//   bullet.velocity.y = random(-5, 0);

// }
// }
//////////////////////
function bubble(x){

  this.x=x;
  this.y=40;
  this.display=function (){
    if(dist(this.x,this.y,bulletx,bullety)<30){
       rem(i);
       }
    else{
  
   fill(255, 0, 0);
   noStroke();
    ellipse(this.x,this.y,50,50);

     jerry3 = createSprite(this.x, this.y, 100, 100);
     jerry3.addImage(loadImage("jerry2.png"));

    }
  }
}


function add(){
   let x=random(100,1800);
   let bubbles=new bubble(x);
  arr.push(bubbles);
}

function gun(){
 
    if (keyIsDown(LEFT_ARROW)) {
    
      
      if(x1<-160){
      
      }
      else{
        x1-=10;
      }
      
    }
  
    if (keyIsDown(RIGHT_ARROW)) {
        if(x1>1700){
        
      }
      else{
        x1+=10;
      }
    }

 image(tom,x1,y1,500,500);
}



function shotdisplay(){
  if(bullety<0){
    
    bullety=900;
  }
  else{
    bullety-=5;
  }
  bulletx=x1+200;
   strokeWeight(5);
   stroke(255);
   fill(88,153,209);
  ellipse(bulletx,bullety,60);
  //j = createSprite(bulletx,bullety, 10,10);

}



function rem(index){
  arr.splice(i,1);
}

function enemy(){

for(i=0;i< arr.length;i++){
   arr[i].display();
 }  
  if(arr.length==0){
    add();
  }

}

