var scene1 = true; //Start Screen
var scene2 = false;//Home Screen
var scene3 = false;//Tom Screen
var scene4 = false;//Bubble Screen
var scene5 = false;//Morty Screen 
let sceneCounter = 1; 
var jerry;
let bg;
var s;
var score = -1;
let lives = 5;
let bulletSprite;
let end = false;
let pause = false;

/////

var i=0;
var x1=710;
var y1=700;
var arr=[];
var bulletx=1000;
var bullety=1000;

function preload() {
  TJ = loadImage("tomBG.jpg"); //All Background Images TV Show settings 
  PPG = loadImage("PPG.jpeg");
  RM = loadImage("rick&morty.jpeg");


  tom = loadImage("tom.png"); //Pictures for Character Selection screen 
  bubbles = loadImage("bubbles.png");
  morty = loadImage("morty.png");

  xirod = loadFont("xirod.ttf"); //Title Font
  start = loadImage("startbutton.png");

}


function setup() {
  createCanvas(1920,1080);
  background(115);
  bulletSprite = createSprite(0,0, 50,50); //Creates Bullet Sprite behind water balloon
   jerry = createSprite(0, 0, 100, 100); //Creates Jerry Sprite 
    jerry.addImage(loadImage("jerry2.png"));
}


function draw() {
  if (pause == false) 
  {
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
      text('CHOOSE YOUR', 250, 200);
      text('CHARACTER', 350, 300);
      textSize(50);
      text('*use left and right arrow keys to move*', 100,400);
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

      fill(0);
      strokeWeight(10);
      stroke(255);
      rect(50,550,350,100);  //Score Box
      rect(50,670,350,100); //Lives Box
      textSize(40);
      noStroke();
      textFont(xirod);
      fill(255);
      text('SCORE:'+score, 70, 600);//Score Text
      text('LIVES:'+lives, 70, 730);//lives Text


      drawSprites();  
      gun();  //Function to move Tom left and Right
      shotdisplay(); //Function to show "balloons"/"bullets"
      enemy(); //Spawns "enemies" or Jerry, Mojo Jojo, and Evil Morty
      
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
  /////////////////
console.log(lives); //Displays lives left in console

if(lives<1) //If you run out of lives, then game ends
{
  end = true;
  pause = true;
}

if(pause==true){
    console.log(end);
    if(end==true){    //If you run out of lives, Game Over displayed
      textFont(xirod);
      noStroke();
      fill(255);
      textAlign(CENTER, CENTER);
      textSize(100);
      text("GAME OVER", width/2, height/2-50);
    }else{
      textFont(xirod); //Still trying to figure out how to create paused function
      noStroke();
      fill(0);
      textAlign(CENTER, CENTER);
      textSize(60);
      text("PAUSED", width/2, height/2-50);
    }
    textFont(xirod);
    textSize(60);
    text("Press R to RESTART", width/2, (height/2)+30);

    if(keyWentDown('r')){ //Restarts game
      
      pause=false;
      end=false;
      score=0;
      lives = 5;
    }
  }

}



function mousePressed(){
  if (scene1 == true)
  {
   if (((mouseX > 630) && (mouseX < 1230)) && ((mouseY > 500) && (mouseY < 750)))  //Start Button
   {
        scene2 = true; //Character Selection Screen
   }
   if (((mouseX > 105)&&(mouseX < 605)) && ((mouseY > 500) && (mouseY < 1000 )))  //Tom Button
   {
        scene3 = true; //Tom Screen
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


}


function bubble(x){

  this.x=x;
  this.y=40;
  this.display=function (){
    if(jerry.overlap(bulletSprite)){
       bullety = 1000;
       rem(i);
       }
    else{
  
   fill(255, 0, 0);
   noStroke();
    
    jerry.position.x = this.x;
    jerry.position.y = this.y;
    ellipse(this.x,this.y,50,50);

    

    }
  }
}


function add(){   //Adds new enemies
   score += 1;
   let x=random(100,1800);
   let bubbles=new bubble(x);
  arr.push(bubbles);
}

function gun(){ //Character Moves around
 
    if (keyIsDown(LEFT_ARROW)) {
    
      
      if(x1<-160){
      
      }
      else{
        x1-=20;
      }
      
    }
  
    if (keyIsDown(RIGHT_ARROW)) {
        if(x1>1700){
        
      }
      else{
        x1+=20;
      }
    }

 image(tom,x1,y1,500,500);
}



function shotdisplay(){ //Display bullets/balloons
  if(bullety<0){
    
    bullety=900;
    lives -=1;
    score -=2;
  }
  else{
    bullety-=10;
  }
  bulletx=x1+200;
   strokeWeight(5);
   stroke(255);
   fill(88,153,209);
  bulletSprite.position.x=bulletx;
  bulletSprite.position.y=bullety;
  drawSprites();
   ellipse(bulletx,bullety,60);

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



