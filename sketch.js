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
  Slider1 = createSlider(colAngry);
  Slider1.position(20, 20);
  // gSlider = createSlider(0, 255, 0);
  // gSlider.position(20, 50);
  // bSlider = createSlider(0, 255, 255);
  // bSlider.position(20, 80);
  // bSlider2 = createSlider(0, 255, 255);
  // bSlider2.position(20, 110);
}

function draw() {
  var colAngry = Slider1.value();
  // var g = gSlider.value();
  // var b = bSlider.value();
  // var b = bSlider2.value();
  fill("colAngry");
  // noStroke();
  ellipse(spot.x, spot.y, 30, 30);
  
  
  
}


