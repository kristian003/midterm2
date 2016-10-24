var spot = {
  x: 100,
  y: 50
};

var col = {
  r: 255,
  g: 0,
  b: 0
};

// var rSlider;

function setup() {
  createCanvas(600, 400);
  background(255);
  rSlider = createSlider(0, 255, 100);
  rSlider.position(20, 20);
}

function draw() {
  col.r = (0, 255);
  spot.x = random(0, width);
  spot.y = random(0, height);
  fill(col.r, col.g, col.b, 100);
  noStroke();
  ellipse(spot.x, spot.y, 12, 12);
  
}


