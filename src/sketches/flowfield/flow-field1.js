import p5 from 'p5';

export default function flowField1 (p) {
  var inc = 0.1;
  var scale = 10;
  var cols, rows;
  var zoff = 0;

  p.setup = function() {
    p.createCanvas(700, 450);
    cols = p.floor(p.width / scale);
    rows = p.floor(p.height / scale);
  }

  p.draw = function() {
    p.background(255);

    var yoff = 0;
    for (var y = 0; y < rows; y++) {
      var xoff = 0;

      for (var x = 0; x < cols; x++) {
        var angle = p.noise(xoff, yoff, zoff) * p.TWO_PI;
        var v = p5.Vector.fromAngle(angle);

        xoff += inc;

        p.stroke(0);
        p.push();
        p.translate(x * scale, y * scale);
        p.rotate(v.heading());
        p.line(0, 0, scale, 0);
        p.pop();
      }

      yoff += inc;
      zoff += 0.001;
    }
  }

  p.keyPressed = function() {
    if (p.keyCode === p.ENTER) {
      p.saveCanvas('perlin-flow', 'png');
    }
  }
}
