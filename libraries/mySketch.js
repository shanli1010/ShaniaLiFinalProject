var scene1 = true; //Start Screen
var scene2 = false;//Home Screen
var scene3 = false;//Tom Screen
var scene4 = false;//Bubble Screen
var scene5 = false;//Morty Screen 

let enemies;
let mojo;
let jerry;
let bg;
var s;
let character;
let evilmorty
var score =1;
let lives = 4;
let bulletSprite;
let end = false;
let pause = false;
let water;
var i=0;
var x1=710;
var y1=700;
var arr=[];
var bulletx=1000;
var bullety=1000;
let splash;

function preload() {

  //TOM & JERRY
  TJ = loadImage("tomBG.jpg"); //All Background Images TV Show settings 
  PPG = loadImage("powerpuff.jpeg");
  RM = loadImage("rick&morty.jpeg");


  tom = loadImage("tom.png"); //Pictures for Character Selection screen 
  bubbles = loadImage("bubbles.png");
  morty = loadImage("morty.png");

  xirod = loadFont("xirod.ttf"); //Title Font
  start = loadImage("startbutton.png");

  jerry = loadImage("jerry2.png");    //Images for all enemies
  mojo = loadImage("mojo.png");
  evilmorty = loadImage("evilmorty.png");

  water = loadImage("water.jpeg");

  splash = loadSound("splash.mp3");

}


function setup() {
  createCanvas(1920,1080);
  background(water);


  bulletSprite = createSprite(0,900, 10,10); //Creates Bullet Sprite behind water balloon
  bulletSprite.addImage(loadImage("waterBalloon.png"));
  enemies = createSprite(0, 0, 100, 100); //Creates Enemy Sprite
  enemies.addImage(jerry);
 

}


function draw() {
  if (pause == false) 
  {
    if (scene1 == true) //Start Screen
    {
     fill(255);
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

      fill(119,213,241);
      strokeWeight(5);
      stroke(0);
      let rect1_coordinate = [710, 500];
      rect(710, 500, 500,500);//Bubbles Character Selection
      image(bubbles, 710, 500, 500, 500);


      strokeWeight(5);
      stroke(0);
      fill(242,103,43);
      let rect2_coordinate = [105, 500];
      rect(105,500,500,500);   //Tom Character Selection
      image(tom, 105, 500, 500, 500);
      


    
      fill(127,193,67);
      strokeWeight(5);
      stroke(0);
      let rect3_coordinate = [1315, 500];
      rect(1315,500,500,500); //Morty Character Selection
      image(morty, 1365, 550, 400, 400);

      mouseHover();     //Lights up Neon Green when mouse is hovered over characters
      

  
    }

    if (scene3 == true) //Tom Screen
    {
      scene2 = false; 
  
      background(TJ);
      // tint(255,115);


      fill(0);
      strokeWeight(10);
      stroke(255);
      rect(1550,30,350,100);  //Score Box
      rect(1550,150,350,100); //Lives Box
      textSize(40);
      noStroke();
      textFont(xirod);
      fill(255);
      text('SCORE:'+score, 1590, 90);//Score Text
      text('LIVES:'+lives, 1590, 210);//lives Text
       text("Press 'H' to go Home", 10, 50);

       enemies.addImage(jerry);
      console.log("jerry");
      drawSprites();  
      gun(tom);  //Function to move Tom left and Right
      shotdisplay(); //Function to show "balloons"/"bullets"
      enemy(); //Spawns "enemies" or Jerry, Mojo Jojo, and Evil Morty

  
     
      
    }
    else if (scene4 == true) //Bubbles Screen
    {
      scene2 = false;
      background(PPG);
      // tint(255,115);

      fill(0);
      strokeWeight(10);
      stroke(255);
      rect(1550,30,350,100);  //Score Box
      rect(1550,150,350,100); //Lives Box
      textSize(40);
      noStroke();
      textFont(xirod);
      fill(255);
      text('SCORE:'+score, 1590, 90);//Score Text
      text('LIVES:'+lives, 1590, 210);//lives Text
      text("Press 'H' to go Home", 10, 50);
    

       mojo.resize(100,100);
      enemies.addImage(mojo);
      console.log("mojo");
      drawSprites();  
      gun(bubbles);  
      shotdisplay();
      enemy(); 


      
      
    }
     else if (scene5 == true) //Morty Screen
    {
    background(RM);
    scene2 = false;

      fill(0);
      strokeWeight(10);
      stroke(255);
      rect(1550,30,350,100);  //Score Box
      rect(1550,150,350,100); //Lives Box
      textSize(40);
      noStroke();
      textFont(xirod);
      fill(255);
      text('SCORE:'+score, 1590, 90);//Score Text
      text('LIVES:'+lives, 1590, 210);//lives Text
      text("Press 'H' to go Home", 10, 50);
      

      evilmorty.resize(110,100);
      enemies.addImage(evilmorty);
      drawSprites();  
      gun(morty);  
      shotdisplay();
      enemy(); 


      
    }
}


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
    text("Press 'R' to RESTART", width/2, (height/2)+30);

    if(keyWentDown('r')){ //Restarts game
      
      pause=false;
      end=false;
      score=2;      //Couldn't figure out why when you restart the game, the balloon falls directly down
      lives = 4;
    }
  }
    if(keyWentDown('h')){ //Restarts game
      
      pause=false;
      end=false;
      score=2;
      lives = 4;
      scene2 = true;
      scene3 = false;
      scene4 = false;
      scene5 = false;
    }
  

}

function mouseHover(){ //If mouse hovers over character in character selection screen, outline will turn bright green 
  noFill();
  stroke(3,255,19);
  strokeWeight(17);
  if (((mouseX > 105)&&(mouseX < 605)) && ((mouseY > 500) && (mouseY < 1000 ))) //Tom Button
      {
        rect(105,500,500,500);
      }
  if (((mouseX > 710)&&(mouseX < 1210)) && ((mouseY> 500 )&&(mouseY< 1000 )))  //Bubble Button
     {
        noFill();
        beginShape();     //Had to use beginshape() instead of rect() because it isn't working for some reason(>_<)
        vertex(710,500);
        vertex(1210, 500);
        vertex(1210, 1000);
        vertex(710,1000);
        // rect(710,1210,500,500);
        endShape(CLOSE);
     }
     
  if (((mouseX > 1315) && (mouseX < 1815)) && ((mouseY>500) && (mouseY < 1000 )))  //Morty Button
    {
        // rect(1315,1815,500,500);
        beginShape();       //Had to use beginshape() instead of rect() because it isn't working for some reason(>_<)
        vertex(1315,500);
        vertex(1815, 500);
        vertex(1815, 1000);
        vertex(1315,1000);
        endShape(CLOSE);

      
    }
  }

function mouseClicked(){
  console.log("scene1 = " + scene1);
  console.log("scene2 = " + scene2);
  console.log("scene3 = " + scene3);
  console.log("scene4 = " + scene4);

 if (scene2==true)
 {
   if (((mouseX > 105)&&(mouseX < 605)) && ((mouseY > 500) && (mouseY < 1000 )))  //Tom Button
   {
        scene3 = true; //Tom Screen
        scene2 = false;
   }
   if (((mouseX > 710 )&&(mouseX < 1210)) && ((mouseY> 500 )&&(mouseY< 1000 )))  //Bubble Button
   {
      
        scene4 = true;
        scene2 = false;
        console.log("blehhhhh");
   }
    if (((mouseX > 1315) && (mouseX < 1815)) && ((mouseY>500) && (mouseY < 1000 )))  //Morty Button
    {
        scene5 = true;
        scene2 = false;
    }
 }

    if (scene1 == true)
  {
   if (((mouseX > 630) && (mouseX < 1230)) && ((mouseY > 500) && (mouseY < 750)))  //Start Button
   {
        scene2 = true; //Character Selection Screen
        scene1 = false;
        console.log("ahhhhh");
   }
 }
 
  }





function bubble(x){ //If waterballoon overlaps enemy character then change balloon position to original position

  enemies.position.x=x;
  enemies.position.y=400;
  this.display=function (){
    if((enemies.overlap(bulletSprite))&&(bulletSprite.velocity.y>0)){
       
       bulletSprite.position.y = 900;
        bulletSprite.velocity.y = -25;
       rem(i);
       }
    else{
  
   fill(255, 0, 0);
   noStroke();
    
    // jerry.position.x = this.x;
    // jerry.position.y = this.y;
    ellipse(this.x,this.y,50,50);

    }
  }
}


function add(){   //Adds new enemies & increases score

   score += 1;
   let x=random(100,1800);
   let bubbles=new bubble(x);
  arr.push(bubbles);
}

function gun(character){ //Character Moves around
 
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

 image(character,x1,y1,500,500);
}



function shotdisplay(){ //Display bullets/balloons
  if(((bulletSprite.position.y>450)&&(bulletSprite.velocity.y>0))||(bulletSprite.position.y>height)){
    
    
    bulletSprite.position.y = 900;
    bulletSprite.velocity.y = -26;
      lives -=1;
      score -=2;
     
  }
  else{
    bulletSprite.velocity.y+=.5;
  }


  

  //console.log(bulletSprite.velocity.y);

  bulletSprite.position.x=x1+200;
   strokeWeight(5);
   stroke(255);
   fill(88,153,209);
  // bulletSprite.position.x=bulletx;
  // bulletSprite.position.y=bullety;
  drawSprites();
   //ellipse(bulletx,bullety,60);

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



