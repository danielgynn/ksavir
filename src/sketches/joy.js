export default function joy (p) {
  p.setup = function() {
    p.createCanvas(500, 500);
    p.pixelDensity(p.displayDensity());
    p.background(20);
    p.strokeWeight(2);
    p.stroke(255);
    p.smooth();
  }

  p.u = function(n) {
    return p.width / 100 * n;
  }

  p.draw = function() {
    var xoff = 0;
    var yoff = 1000;

    p.background(20);

    for(var y = p.height * 0.1; y < p.height * 0.9; y += p.u(1.5)) {
      p.push();
      p.translate(0, y);
      p.noFill();
      p.beginShape();
      for(var x = p.width*0.1; x < p.width*0.9; x++) {
        var ypos = p.map(p.noise(x/100 + xoff, y/100 + yoff), 0, 1, -100, 100);
        var magnitude = x < p.width*0.5 ? p.map(x, p.width*0.1, p.width*0.5, 0, 1) : p.map(x, p.width*0.5, p.width*0.9, 1, 0) ;
        ypos *= magnitude;
        if(ypos > 0) ypos = 0;
        p.vertex(x, ypos);
      }
      p.endShape();
      p.pop();
    }

    xoff += 0.01;
    yoff += -0.01;
  }

  p.keyPressed = function() {
    if (p.keyCode === p.ENTER) {
      p.saveCanvas('deep-joy', 'jpg');
    }
  }
}
