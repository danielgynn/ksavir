export default function rotator (p, width) {
  var rotation   = 0; // This is just to keep track of the current rotation
  var noOfLines = 52;  // Change me! The total number of lines drawn
  var squareSize = 450; // Change me! The size of the square
  var circleSize = 350; // Change me! The size of the circle
  var halfSquare = squareSize / 2;
  var circleRadius = circleSize / 2;
  var pointsAlongSquare = p.createVector(p.width/2, p.height/2);
  var squareX;
  var squareY;
  var pointsPerSide = noOfLines / 4;

  p.setup = function() {
    p.createCanvas(700, 450);
    p.pixelDensity(p.displayDensity());

    for(var i = 0; i < 4; i++) {
      for(var j = 0; j < pointsPerSide; j++) {
        if(i === 0) {
          squareX = p.map(j, 0, pointsPerSide, -halfSquare, halfSquare);
          squareY = -halfSquare;
        } else if(i === 1) {
          squareY = p.map(j, 0, pointsPerSide, -halfSquare, halfSquare);
          squareX = halfSquare;
        } else if(i === 2) {
          squareX = p.map(j, 0, pointsPerSide, halfSquare, -halfSquare);
          squareY = halfSquare;
        } else if(i === 3) {
          squareY = p.map(j, 0, pointsPerSide, halfSquare, -halfSquare);
          squareX = -halfSquare;
        }

        pointsAlongSquare.add(p.createVector(squareX, squareY));
      }
    }
  }

  p.draw = function() {
    p.background('#2c3e50');
    p.stroke('#e74c3c');
    p.strokeWeight(1);

    // Translate to the center of the canvas to make math easier
    p.translate(p.width/2, p.height/2);

    // Draw a series of points along the circle and then draw a line to each
    // point on the square
    for(var i = 0; i < noOfLines; i++) {
      var angle = p.radians((i / noOfLines) * 360) * 10;
      var point = p.createVector(p.sin(angle) * (p.width/2), p.cos(angle) * (p.height/2));

      var origin = pointsAlongSquare.set(p.round(i)).copy();
      origin.mult(-1);
      point.limit(circleRadius);
      point.rotate(rotation);
      p.line(origin.x, origin.y, point.x, point.y);
    }

    rotation += 0.01;
  }

  p.keyPressed = function() {
    if (p.keyCode === p.ENTER) {
      p.saveCanvas('rotator', 'png');
    }
  }
}
