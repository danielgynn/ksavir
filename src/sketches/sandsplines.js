function setup() {
  noLoop();
  noFill();
  colorMode(HSB);

  createCanvas(800, 500);
  smooth(2);
  pixelDensity(displayDensity());

  background(95);
  // blendMode(MULTIPLY);

  // Slightly inset the drawing
  translate(width*0.1, height*0.1);

  // set the increment - this changes how many lines are drawn
  inc = u(4);

  for (i = 0; i < height * 1; i += inc) {
    // set an initial volatility
    vol = random(0.5);
    layers = 8; // the number of times each line is drawn
    // use a different color each render
    h = random(0, 255);

    push();
    translate(0, i+1);
    for (j = 0; j < layers; j++) {
      t = map(j, 1, layers, 4, 60);
      stroke(h, 200, 200, t); // change to h, 200, 200, t
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
    y = map(noise(yoff), 0, 1, -u(40), u(40)) * (volatility*noise(i/500));
    x = (w/granularity)*i;
    x += map(noise(xoff), 0, 1, -u(20), u(20));
    y *= exp(i*0.01)*0.015;
    curveVertex(x, y);
    yoff += 0.2;
    xoff += 0.015;
  }
  endShape();
}

function keyPressed() {
  if (keyCode === ENTER) {
    saveCanvas('sandsplines', 'jpg');
  } else if (keyCode === CONTROL) {
    // translate(width*0.1, height*0.5);
    vol = random(0.5);
    drawLine(0, width*0.6, vol);
  }
}
