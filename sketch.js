var rSlider

var spot = {
  x: 300,
  y: 200
};

var colAngry = "red";


function setup() {
  createCanvas(600, 400);
  Slider1 = createSlider(colAngry);
  Slider1.position(20, 20);
 
}

function draw() {
  var colAngry = Slider1.value();
  fill('blue');
  ellipse(spot.x, spot.y, 30, 30);
  
  
  
}


