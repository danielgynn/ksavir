export default function triangular (p) {
  var s;
  var c1, c2, c3, c4, c5, c6;
  var b1, b2, b3, b4, b5, b6;
  var d1, d2, d3, d4, d5, d6;
  var x1, y1, x2, y2, x3, y3, x4, y4, x5, y5, x6, y6, x7, y7;
  var ox, oy;

  p.setup = function() {
    p.createCanvas(700, 450);
    s = 200;
    c1 = 0;
    c2 = 0;
    c3 = 0;
    c4 = 0;
    c5 = 0;
    c6 = 0;
    b1 = true;
    b2 = true;
    b3 = true;
    b4 = true;
    b5 = true;
    b6 = true;
    d1 = false;
    d2 = false;
    d3 = false;
    d4 = false;
    d5 = false;
    d6 = false;
    ox = p.width/2;
    oy = p.height/2;
    x1 = ox;
    y1 = oy;
    x2 = ox;
    y2 = oy+s;
    x3 = ox+(p.sqrt(3)/2)*s;
    y3 = oy+s/2;
    x4 = ox+(p.sqrt(3)/2)*s;
    y4 = oy-s/2;
    x5 = ox;
    y5 = oy-s;
    x6 = ox-(p.sqrt(3)/2)*s;
    y6 = oy-s/2;
    x7 = ox-(p.sqrt(3)/2)*s;
    y7 = oy+s/2;
    p.background('#2ecc71');
  }

  p.draw = function() {
    p.noStroke();
    p.fill(c1);
    p.triangle(x1,y1,x2,y2,x3,y3);
    p.fill(c2);
    p.triangle(x1,y1,x3,y3,x4,y4);
    p.fill(c3);
    p.triangle(x1,y1,x4,y4,x5,y5);
    p.fill(c4);
    p.triangle(x1,y1,x5,y5,x6,y6);
    p.fill(c5);
    p.triangle(x1,y1,x6,y6,x7,y7);
    p.fill(c6);
    p.triangle(x1,y1,x7,y7,x2,y2);
  }

  // When the user clicks the mouse
  p.mousePressed = function() {
    function is_in_triangle(px,py,ax,ay,bx,by,cx,cy) {
      var v0 = [cx-ax,cy-ay];
      var v1 = [bx-ax,by-ay];
      var v2 = [px-ax,py-ay];

      var dot00 = (v0[0]*v0[0]) + (v0[1]*v0[1]);
      var dot01 = (v0[0]*v1[0]) + (v0[1]*v1[1]);
      var dot02 = (v0[0]*v2[0]) + (v0[1]*v2[1]);
      var dot11 = (v1[0]*v1[0]) + (v1[1]*v1[1]);
      var dot12 = (v1[0]*v2[0]) + (v1[1]*v2[1]);

      var invDenom = 1/ (dot00 * dot11 - dot01 * dot01);

      var u = (dot11 * dot02 - dot01 * dot12) * invDenom;
      var v = (dot00 * dot12 - dot01 * dot02) * invDenom;

      return ((u >= 0) && (v >= 0) && (u + v < 1));
    }

    d1 = is_in_triangle(p.mouseX,p.mouseY,x1,y1,x2,y2,x3,y3);
    if (d1 === true) {
      if (b1 === true) {
        c1 = 255;
        b1 = false;
      } else {
        c1 = 100;
        b1 = true;
      }
    }
    d2 = is_in_triangle(p.mouseX,p.mouseY,x1,y1,x3,y3,x4,y4);
    if (d2 === true) {
      if (b2 === true) {
        c2 = 255;
        b2 = false;
      } else {
        c2 = 100;
        b2 = true;
      }
    }
    d3 = is_in_triangle(p.mouseX,p.mouseY,x1,y1,x4,y4,x5,y5);
    if (d3 === true) {
      if (b3 === true) {
        c3 = 255;
        b3 = false;
      } else {
        c3 = 100;
        b3 = true;
      }
    }
    d4 = is_in_triangle(p.mouseX,p.mouseY,x1,y1,x5,y5,x6,y6);
    if (d4 === true) {
      if (b4 === true) {
        c4 = 255;
        b4 = false;
      } else {
        c4 = 100;
        b4 = true;
      }
    }
    d5 = is_in_triangle(p.mouseX,p.mouseY,x1,y1,x6,y6,x7,y7);
    if (d5 === true) {
      if (b5 === true) {
        c5 = 255;
        b5 = false;
      } else {
        c5 = 100;
        b5 = true;
      }
    }
    d6 = is_in_triangle(p.mouseX,p.mouseY,x1,y1,x7,y7,x2,y2);
    if (d6 === true) {
      if (b6 === true) {
        c6 = 255;
        b6 = false;
      } else {
        c6 = 100;
        b6 = true;
      }
    }
  }

  p.keyPressed = function() {
    if (p.keyCode === p.ENTER) {
      p.saveCanvas('triangular', 'png');
    }
  }
}
