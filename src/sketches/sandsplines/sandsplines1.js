export default function sandsplines (p) {
  p.setup = function() {
    p.createCanvas(800, 500);
    p.noLoop();
    p.noFill();
    p.colorMode(p.HSB);
    p.smooth(2);
    p.pixelDensity(p.displayDensity());
    p.background(95);
    p.translate(p.width*0.005, 20);

    // set the increment - this changes how many lines are drawn
    var inc = p.u(1.5);

    for (var i = 0; i < p.height * 1; i += inc) {
      var vol = p.random(0.6); // set an initial volatility
      var layers = 8; // the number of times each line is drawn
      var h = p.random(0, 255); // use a different color each render

      p.push();
      p.translate(0, i-10);

      for (var j = 0; j < 8; j++) {
        var t = p.map(j, 1, layers, 4, 60);
        p.stroke(h, 50, 100, t); // change to h, 200, 200, t
        p.drawLine(0, p.width*0.8, vol);
      }

      p.pop();
      vol += 0.15;
    }
  }

  p.u = function(uu) {
    return (p.width / 60) * uu;
  }

  p.drawLine = function(x1, x2, volatility) {
    var granularity = p.random(300, 500); // this controls the number of points per line
    // noise offsets
    var yoff = 0;
    var xoff = 1000;
    var w = x2 - x1;

    p.beginShape();
    p.curveVertex(0, x1);

    for (var i = 1; i < granularity; i++) {
      var y = p.map(p.noise(yoff), 0, 1, -p.u(30), p.u(30)) * (volatility * p.noise(i / 150));
      var x = (w / granularity) * i;

      x += p.map(p.noise(xoff), 0, 1, -p.u(20), p.u(20));
      y *= p.exp(i * 0.01) * 0.005;
      p.curveVertex(x, y);
      yoff += 0.1;
      xoff += 0.01;
    }

    p.endShape();
  }

  p.keyPressed = function() {
    if (p.keyCode === p.ENTER) {
      p.saveCanvas('sandsplines', 'jpg');
    }
  }
}
