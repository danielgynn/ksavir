function setup() {
  createCanvas(640, 480);
}

function draw() {
  xoff = 0;
  inc = 0.02;

  background(25);
  stroke(100);
  for(i = -2; i < height * 2; i += 4) {
    len = (noise(xoff) * width) / 1.5;
    line((width / 1.8) - (len / 2) - i / 2, i, (width / 1.8) + (len / 2), i / 2);
    xoff+=inc;
  }

  noLoop();
}

function keyPressed() {
  if (keyCode === ENTER) {
    saveCanvas('perlin', 'jpg');
  }
}

function mousePressed() {
  redraw(5);
}
