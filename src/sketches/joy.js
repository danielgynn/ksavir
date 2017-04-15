function setup() {
  createCanvas(500, 500);
  pixelDensity(displayDensity());
  background(20);
  strokeWeight(2);
  stroke(255);
  smooth();
}

function u(n) {
  return width / 100 * n;
}

function draw() {
  xoff = 0;
  yoff = 1000;

  background(20);

  for(y = height * 0.1; y < height * 0.9; y += u(1.5)) {
    push();
    translate(0, y);
    noFill();
    beginShape();
    for(x = width*0.1; x < width*0.9; x++) {
      ypos = map(noise(x/100 + xoff, y/100 + yoff), 0, 1, -100, 100);
      magnitude = x < width*0.5 ? map(x, width*0.1, width*0.5, 0, 1) : map(x, width*0.5, width*0.9, 1, 0) ;
      ypos *= magnitude;
      if(ypos > 0) ypos = 0;
      vertex(x, ypos);
    }
    endShape();
    pop();
  }

  xoff += 0.01;
  yoff += -0.01;
}

function keyPressed() {
  if (keyCode === ENTER) {
    saveCanvas('deep-joy', 'jpg');
  }
}
