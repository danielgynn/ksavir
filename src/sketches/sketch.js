function setup() {
  createCanvas(640, 480);
  background(0);
}

function draw() {
  if (mouseIsPressed) {
    var draw = ellipse(mouseX, mouseY, 40, 40);
    fill(255);
  }

  // Draw the currently selected option
  draw;
}

function keyPressed() {
  if (keyCode === ESCAPE) {
    var draw = rect(mouseX, mouseY, 40, 40, 5);
    fill(255);
  } else if (keyCode === ENTER) {
    saveCanvas('canvas', 'jpg');
  }
}
