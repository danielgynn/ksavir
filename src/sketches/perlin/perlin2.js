export default function perlin (p) {
  p.setup = function(props) {
    p.createCanvas(640, 480);
    p.redraw();
  }

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
      if (props.redraw){
        p.redraw();
      }
    };

  p.draw = function() {
    var xoff = 0;
    var inc = 0.05;

    p.background(195);
    p.stroke(100);
    for(var i = -6; i < p.height * 10; i += 8) {
      var len = (p.noise(xoff) * p.width) / 1.5;
      p.line((p.width / 1.8) - (len / 6) - i / 5, i, (p.width / 1.8) + (len / 6), i / 5);
      xoff+=inc;
    }

    p.noLoop();
  }

  p.keyPressed = function() {
    if (p.keyCode === p.ENTER) {
      p.saveCanvas('perlin2', 'png');
    }
  }
}
