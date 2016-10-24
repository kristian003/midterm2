var spot = {
  x: 300,
  y: 200
};

var colAngry = {
  r: 0,
  g: 255,
  b:100
};


// var rSlider;

function setup() {
  createCanvas(600, 400);
  Slider1 = createSlider("colAngry");
  Slider1.position(20, 20);
 
}

function draw() {
  var ColAngry = Slider1.value();
  fill("colAngry");
  // noStroke();
  ellipse(spot.x, spot.y, 30, 30);
  
  
  
}


