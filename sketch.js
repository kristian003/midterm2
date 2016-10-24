var spot = {
  x: 300,
  y: 200
};


var colAngry = {
  r: 0,
  g:255,
  b:100
};


// var rSlider;

function setup() {
  createCanvas(600, 400);
  rSlider = createSlider(0, 255, 100);
  rSlider.position(20, 20);
  gSlider = createSlider(0, 255, 0);
  gSlider.position(20, 50);
  bSlider = createSlider(0, 255, 255);
  bSlider.position(20, 80);
  bSlider2 = createSlider(0, 255, 255);
  bSlider2.position(20, 110);
}

function draw() {
  var r = rSlider.value();
  var g = gSlider.value();
  var b = bSlider.value();
  var b = bSlider2.value();
  fill(r, g, b);
  noStroke();
  ellipse(spot.x, spot.y, 30, 30);
  
  
  
}


