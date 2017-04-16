export default function abstract (p) {
  p.setup = function() {
    p.createCanvas(700, 450);
    p.background(0);

    // size(800,600);
    // var myFont = p.createFont("Jesse test1", p.width/50);
    // p.textFont (myFont);
    p.textAlign(p.CENTER);//textMode(SHAPE);
    var direction = 1;
    if (direction === 0) {
      p.createimage();
    } else if (direction === 1) {
      p.background(0);
      p.text("Click to generate new image.", p.width/2, p.height*.45);
      p.text("Press \"s\" to save to application directory.", p.width/2, p.height*.55);
      p.smooth();
    }
  }

  p.draw = function() {

  }

  p.mouseClicked = function() {
    var direction = 0;
    p.setup();
  }

  p.createimage = function(){
    p.background(p.random(0,50), p.random(0,50), p.random(0,50));
    for(var x=0; x<p.random(20,100); x++){
    p.strokeWeight(p.round(p.random(0,2)));
    p.stroke(p.random(127,255));
    p.fill(p.random(0,255), p.random(0,255), p.random(0,255), p.round(p.random(0,100)));
    p.quad(p.random(-p.width,p.width*2), p.random(-p.width,p.height*2), p.random(-p.width,p.width*2), p.random(-p.width,p.height*2), p.random(-p.width,p.width*2), p.random(-p.width,p.height*2), p.random(-p.width,p.width*2),p.random(-p.width,p.height*2));
    p.smooth();
    }
  }

  p.keyPressed = function() {
    if (p.keyCode === 's' || p.keyCode === 'S'){
      var direction=0;
      p.saveCanvas('abstract', 'jpg');
    }
  }
}
