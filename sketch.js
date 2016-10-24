var spot = {
  x: 300,
  y: 200
};

var colEmotions = {
  angry: red,
  sad: blue,
  b:100
};


// var rSlider;

function setup() {
  createCanvas(600, 400);
  Slider1 = createSlider("angry");
  Slider1.position(20, 20);
 
}

function draw() {
  // var angry = Slider1.red();
  // fill(angry);
  // // noStroke();
  ellipse(spot.x, spot.y, 30, 30);
  
  
  
}


