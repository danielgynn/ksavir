export default function playground (p) {
  p.setup = function() {
    p.createCanvas(640, 480);
    p.background(0);
  }

   p.draw = function() {
    if (p.mouseIsPressed) {
      var draw = p.ellipse(p.mouseX, p.mouseY, 40, 40);
      p.fill(255);
    }

    // Draw the currently selected option
    draw;
  }

  p.keyPressed = function() {
    if (p.keyCode === p.ESCAPE) {
      var draw = p.rect(p.mouseX, p.mouseY, 40, 40, 5);
      p.fill(255);
    } else if (p.keyCode === p.ENTER) {
      p.saveCanvas('canvas', 'jpg');
    }

    draw;
  }
}
