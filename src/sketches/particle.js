import p5 from 'p5';

function Particle(p) {
  this.pos = p.createVector(p.random(p.width), p.random(p.height));
  this.vel = p5.Vector.random2D();
  this.acc = p.createVector(0, 0);

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult();
  }

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.show = function() {
    p.stroke(0);
    p.point(this.pos.x, this.pos.y);
  }

  this.edges = function() {
    if (this.pos.x > p.width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = p.width;
    if (this.pos.y > p.height) this.pos.x = 0;
    if (this.pos.y < 0) this.pos.x = p.height;
  }
}

export default Particle;
