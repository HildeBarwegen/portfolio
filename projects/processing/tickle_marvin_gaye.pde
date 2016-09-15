import ddf.minim.spi.*;
import ddf.minim.signals.*;
import ddf.minim.*;
import ddf.minim.analysis.*;
import ddf.minim.ugens.*;
import ddf.minim.effects.*;

Minim minim;
AudioPlayer player;

boolean soundTrigger = false;

import java.util.Date;

String name = "Lizzie_Malcolm";
String project = "project_03";
long now;


PFont f;

PImage p;
int myImageWidth = 1000;
int myImageHeight = 1000;
int cellHeight = 10;
int cellWidth = 10;
int X, Y;
int nX, nY;

void setup() {
  background(255);
  size(myImageWidth, myImageHeight);
  f = createFont("Arial",500, true);
  noStroke();
  ellipseMode(CORNER);
  p = loadImage("data/1.jpg");
  frameRate(20);
  X = width / 2;
  Y = height / 2;
  nX = X;
  nY = Y;
  
  minim = new Minim(this);
  player = minim.loadFile("data/marvin2.mp3");
  
 
}


void draw() {
      soundTrigger = false;

  background(0);
  rectMode(RADIUS);
  
  // Track circle) to new destination
  X+=(nX-X);
  Y+=(nY-Y);

  
  for (int x = 0; x < width; x += cellWidth) {
    for (int y = 0; y < height; y += cellHeight) {
      int loc = x + y * width;

      color c = p.pixels[loc];
      fill(c);
    
      if (x < width) {
        float radius = random(cellWidth -10, cellWidth +10);
        rect(x, y, radius, radius);
      }
      float radius2 = random(cellWidth, cellWidth +100);
      if (pmouseX != X && pmouseY !=Y) {
       rect(x,y, radius2, radius2); 
      }  
  }
  }
  
  if(soundTrigger == false){
  player.pause();
  }


}

void mouseMoved(){
  nX = mouseX;
  nY = mouseY;  
  
  soundTrigger = true;
   if (soundTrigger == true){
    player.play();
    soundTrigger = false;
  }  
}

//void mouseMoved() {
// radius = radius +50;
// if (radius > 50) {
//   radius = radius;
//}
//}
// 
