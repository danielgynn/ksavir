import p5 from 'p5';
// import Particle from './particle.js';

export default function flowField2 (p) {
  var inc = 0.1;
  var scale = 10;
  var cols, rows;
  var zoff = 0;
  var particles = [];
  var flowField;

  function Particle() {
    this.pos = p.createVector(p.random(p.width), p.random(p.height));
    this.vel = p.createVector(0, 0);
    this.acc = p.createVector(0, 0);
    this.maxspeed = 4;

    this.update = function() {
      this.vel.add(this.acc);
      this.vel.limit(this.maxspeed);
      this.pos.add(this.vel);
      this.acc.mult();
    }

    this.follow = function(vectors) {
      var x = p.floor(this.pos.x / scale);
      var y = p.floor(this.pos.y / scale);
      var index = x + y * cols;
      var force = vectors[index];

      this.applyForce(force);
    }

    this.applyForce = function(force) {
      this.acc.add(force);
    }

    this.show = function() {
      p.stroke(0);
      p.strokeWeight(4);
      p.point(this.pos.x, this.pos.y);
    }

    this.edges = function() {
      if (this.pos.x > p.width) this.pos.x = 0;
      if (this.pos.x < 0) this.pos.x = p.width;
      if (this.pos.y > p.height) this.pos.x = 0;
      if (this.pos.y < 0) this.pos.x = p.height;
    }
  }

  p.setup = function() {
    p.createCanvas(400, 400);
    cols = p.floor(p.width / scale);
    rows = p.floor(p.height / scale);

    flowField = new Array(cols * rows);

    for (var i = 0; i < 100; i++) {
      particles[i] = new Particle();
    }
  }

  p.draw = function() {
    p.background(255);

    var yoff = 0;
    for (var y = 0; y < rows; y++) {
      var xoff = 0;

      for (var x = 0; x < cols; x++) {
        var index = x + y * cols;
        var angle = p.noise(xoff, yoff, zoff) * p.TWO_PI;
        var v = p5.Vector.fromAngle(angle);
        v.setMag(5);

        flowField[index] = v;
        xoff += inc;

        p.stroke(0, 50);
        p.strokeWeight(1);
        p.push();
        p.translate(x * scale, y * scale);
        p.rotate(v.heading());
        p.line(0, 0, scale, 0);
        p.pop();
      }

      yoff += inc;
      zoff += 0.001;
    }

    for (var i = 0; i < particles.length; i++) {
      particles[i].follow(flowField);
      particles[i].update();
      particles[i].show();
      particles[i].edges();
    }
  }

  p.keyPressed = function() {
    if (p.keyCode === p.ENTER) {
      p.saveCanvas('perlin-flow', 'png');
    }
  }
}
