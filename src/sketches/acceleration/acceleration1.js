export default function acceleration1 (p) {
  var balls = [];

  var threshold = 30;
  var accChangeX = 0;
  var accChangeY = 0;
  var accChangeZ = 0;
  var accChangeT = 0;
  var faccChangeX = 0;
  var faccChangeY = 0;
  var faccChangeZ = 0;

  p.setup = function() {
    p.createCanvas(700, 400);

    for (var i=0; i<50; i++) {
      balls.push(new Ball());
    }
  }

  p.draw = function() {
    p.background(0);

    for (var i=0; i<balls.length; i++) {
      balls[i].move();
      balls[i].display();
    }

    p.fill(255, 0, 0);
    p.textSize(24)

    if (accChangeT >= threshold){
      faccChangeX = p.floor(accChangeX);
      faccChangeY = p.floor(accChangeY);
      faccChangeZ = p.floor(accChangeZ);
    }

    if (faccChangeX > 0 && faccChangeY > 0 && faccChangeZ > 0) {
      p.text(faccChangeX, 60, 140);
      p.text(faccChangeY, 60, 160);
      p.text(faccChangeZ, 60, 180);
    }

    p.checkForShake();
   }

  // Ball class
  function Ball() {
    this.x = p.random(p.width);
    this.y = p.random(p.height);
    this.diameter = p.random(10, 30);
    this.xspeed = p.random(-2, 2);
    this.yspeed = p.random(-2, 2);
    this.oxspeed = this.xspeed;
    this.oyspeed = this.yspeed;
    this.direction = 0.7;

    this.move = function() {
      this.x += this.xspeed * this.direction;
      this.y += this.yspeed * this.direction;
    };

    // Bounce when touch the edge of the canvas
    this.turn = function() {
      if (this.x < 0) {
        this.x = 0;
        this.direction = -this.direction;
      }
      else if (this.y < 0) {
        this.y = 0;
        this.direction = -this.direction;
      }
      else if (this.x > p.width - 20) {
        this.x = p.width - 20;
        this.direction = -this.direction;
      }
      else if (this.y > p.height - 20) {
        this.y = p.height - 20;
        this.direction = -this.direction;
      }
    };

    // Add to xspeed and yspeed based on
    // the change in accelerationX value
    this.shake = function() {
      this.xspeed += p.random(5, accChangeX/3);
      this.yspeed += p.random(5, accChangeX/3);
    };

    // Gradually slows down
    this.stopShake = function() {
      if (this.xspeed > this.oxspeed) {
        this.xspeed -= 0.6;
      }
      else {
        this.xspeed = this.oxspeed;
      }
      if (this.yspeed > this.oyspeed) {
        this.yspeed -= 0.6;
      }
      else {
        this.yspeed = this.oyspeed;
      }
    };

    this.display = function() {
      p.ellipse(this.x, this.y, this.diameter, this.diameter);
    };
  }

  p.checkForShake = function() {
    // Calculate total change in accelerationX and accelerationY
    accChangeX = p.abs(p.accelerationX - p.pAccelerationX);
    accChangeY = p.abs(p.accelerationY - p.pAccelerationY);
    accChangeZ = p.abs(p.accelerationZ - p.pAccelerationZ);
    accChangeT = accChangeX + accChangeY;
    // If shake
    if (accChangeT >= threshold) {
      for (var i=0; i<balls.length; i++) {
        balls[i].shake();
        balls[i].turn();
      }
    }
    // If not shake
    else {
      for (var i=0; i<balls.length; i++) {
        balls[i].stopShake();
        balls[i].turn();
        balls[i].move();
      }
    }
  }
}
