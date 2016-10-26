var alf = 0;
var beta = 0;
var gamma = 0

var alfbutton;
var betabutton;
var gammabutton;


var spot = {
  x: 300,
  y: 200
};



function setup() {
  createCanvas(600, 400);
  rSlider = createSlider(0, 255, 100);
  rSlider.position(20, 20);
  gSlider = createSlider(0, 255, 0);
  gSlider.position(20, 50);
  bSlider = createSlider(0, 255, 255);
  bSlider.position(20, 80);
 
}

function draw() {
  var r = rSlider.value();
  var g = gSlider.value();
  var b = bSlider.value();
  fill(r,g,b);
  noStroke();
  ellipse(spot.x, spot.y, 100, 100);
  
  
  
}


