var scene1 = true; //Start Screen
var scene2 = false;//Home Screen
var scene3 = false;//Tom Screen
var scene4 = false;//Bubble Screen
var scene5 = false;//Morty Screen 
let bg;

function setup() {

  createCanvas(1920,1080);
  textSize(25);
  bg = loadImage("tom.jpg");
  background(bg);

}

function draw() {
  if (scene1 == true) //Start Screen
  {
bg = loadImage("tom.jpg");
  background(bg);
  }
  else if (scene2 == true)
  {

  }
  else if (scene3 == true)
  {

  }
  else if (scene4 == true)
  {

  }
   else if (scene5 == true)
  {

  }

}

function mousePressed(){
  if (scene1 == true)
  {
   // // if ((mouseX<  )&&(mouseX>)&& (mouseY<  )&&(mouseY>  ))  Start Button
   // {
        //scene2 = true;
   // }
   // // if ((mouseX<  )&&(mouseX>)&& (mouseY<  )&&(mouseY>  ))  Tom Button
   // {
        //scene3 = true;
   // }
   // // else if ((mouseX<  )&&(mouseX>)&& (mouseY<  )&&(mouseY>  ))  Bubble Button
   // {
        //scene4 = true;
   // }
   // // else if ((mouseX<  )&&(mouseX>)&& (mouseY<  )&&(mouseY>  ))  Morty Button
   // {
        //scene5 = true;
   // }
   // Turn Scene1 Off 
   //     scene1 = false;
  }

}

