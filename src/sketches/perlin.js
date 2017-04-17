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
    var inc = 0.035;

    p.background(35);
    p.stroke(200);
    for(var i = -2; i < p.height * 2; i += 4) {
      var len = (p.noise(xoff) * p.width) / 1.5;
      p.line((p.width / 1.8) - (len / 2) - i / 2, i, (p.width / 1.8) + (len / 2), i / 2);
      xoff+=inc;
    }

    p.noLoop();
  }

  p.keyPressed = function() {
    if (p.keyCode === p.ENTER) {
      p.saveCanvas('perlin', 'jpg');
    }
  }
}
