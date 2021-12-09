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

function preload() {
  TJ = loadImage("tomBG.jpg"); //All Background Images TV Show settings 
  PPG = loadImage("PPG.jpeg");
  RM = loadImage("rick&morty.jpeg");


  tom = loadImage("tom.png"); //Pictures for Character Selection screen 
  bubbles = loadImage("bubbles.png");
  morty = loadImage("morty.png");

  xirod = loadFont("xirod.ttf"); //Title Font
  start = loadImage("startbutton.png");

  jerry = createSprite(305, 300, 200, 200);
  jerry.addImage(loadImage("jerry2.png"));

  jerry2 = createSprite(1005, 300, 200, 200);
  jerry2.addImage(loadImage("jerry2.png"));

  jerry3 = createSprite(1605, 300, 200, 200);
  jerry3.addImage(loadImage("jerry2.png"));




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
    rect(710, 500, 500,500); //Bubble Character Selection
    image(bubbles, 710, 500, 500, 500);

    fill(127,193,67);
    rect(1315,500,500,500);   //Morty Character Selection
    image(morty, 1365, 550, 400, 400);
  }

  if (scene3 == true) //Tom Screen
  {
    scene2 = false; 
    background(TJ);
    image(tom,710,700,500,500);
    drawSprites();
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



  // switch(sceneCounter)
  // {
  //   case 0:
  //     break;

  //   case 1:
  //     if (scene1 == true)
  //       {
  //        if (((mouseX > 630) && (mouseX < 1230)) && ((mouseY > 500) && (mouseY < 750)))  //Start Button
  //          {
  //             scene2 = true;
  //           }   
  //           scene1 = false;
  //           sceneCounter++;
  //         }
  //         break;
  //   case 2:
  //     if (scene2 == true)
  //     {
  //       if (((mouseX > 105)&&(mouseX > 605)) && ((mouseY > 500) && (mouseY < 1000 )))  //Tom Button
  //          {
  //               scene3 = true;
  //          }
  //       scene2 = false;
  //       sceneCounter++; 
  //     }
  // }



  if (scene1 == true)
  {
   if (((mouseX > 630) && (mouseX < 1230)) && ((mouseY > 500) && (mouseY < 750)))  //Start Button
   {
        scene2 = true;
   }
   if (((mouseX > 105)&&(mouseX < 605)) && ((mouseY > 500) && (mouseY < 1000 )))  //Tom Button
   {
        scene3 = true;
        
        s = createSprite(mouseX, mouseY, 30, 30);
        s.velocity.x = random(-5, 0);
        s.velocity.y = random(-5, 0);
        
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

