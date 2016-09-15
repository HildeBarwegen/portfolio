float jitter;
float angle;
int a = height /2;
int b = width /2;

void setup() {
  size(1000, 600);
  background (255, 0, 0);
  ellipseMode(CORNERS);
}

void draw() {
  
  frameRate(1000);

  noStroke();


  fill(random(0, 255));
  ellipse (mouseX, a - 50, mouseY, a + 50);

  ellipse (a - 50, mouseX, a+50, mouseY);

  ellipse (width -50, mouseY, width + 50, mouseX);

  ellipse (mouseX, height +50, mouseY, height - 50 );


   if (mouseX < width) {  
    jitter = random(-0.1, 0.1);
  }
  angle = angle + jitter;
  float c = cos(angle);
  translate(a, b);
  rotate(c);
  ellipse(mouseX,mouseY, 500, 500); 
}

