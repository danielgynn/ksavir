function setup() {
  createCanvas(800, 500);
  noLoop();
  noFill();
  colorMode(HSB);
  smooth(2);
  pixelDensity(displayDensity());
  background(100);
  translate(width*0.05, -150);

  // set the increment - this changes how many lines are drawn
  inc = u(1.5);

  for (i = 0; i < height * 1; i += inc) {
    // set an initial volatility
    vol = random(0.6);
    layers = 8; // the number of times each line is drawn
    // use a different color each render
    h = random(0, 255);

    push();
    translate(0, i-10);
    for (j = 0; j < 8; j++) {
      t = map(j, 1, layers, 4, 60);
      stroke(h, 50, 100, t); // change to h, 200, 200, t
      drawLine(0, width*0.8, vol);
    }
    pop();
    vol += 0.15;
  }
}

function u(p) {
  return (width/100)*p;
}

function drawLine(x1, x2, volatility) {
  var granularity = random(300, 500); // this controls the number of points per line
  // noise offsets
  yoff = 0;
  xoff = 1000;

  w = x2 - x1;
  beginShape();
  curveVertex(0, x1);
  for (i = 1; i < granularity; i++) {
    y = map(noise(yoff), 0, 1, -u(30), u(30)) * (volatility * noise(i / 150));
    x = (w / granularity) * i;
    x += map(noise(xoff), 0, 1, -u(20), u(20));
    y *= exp(i * 0.01) * 0.005;
    curveVertex(x, y);
    yoff += 0.1;
    xoff += 0.01;
  }
  endShape();
}

function keyPressed() {
  if (keyCode === ENTER) {
    saveCanvas('sandsplines', 'jpg');
  }
}
