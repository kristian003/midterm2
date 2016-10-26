var alf = 0;
var beta = 0;
var gamma = 0
<<<<<<< HEAD

var alfbutton;
var betabutton;
var gammabutton;


var spot = {
  x: 300,
  y: 200
};
=======
>>>>>>> origin/master

var alfbutton;
var betabutton;
var gammabutton;

<<<<<<< HEAD

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
=======
var bubble1;

var alfabool = false;

var alfaArray = [];


function setup() {
  createCanvas(600, 400);
  alfbutton = createButton("alpha");
  alfbutton.position(10, 10);
  alfbutton.mousePressed(alfarandom);

  bubble1 = new alfabubble(random(width), random(height));

}

function draw() {
  frameRate(1);
  
  background(255);
>>>>>>> origin/master
  
  if (alfabool == true) {
    var randomalf = random(7.5, 12.6);
    alf = int(map(randomalf, 7.5, 12.6, 0, 50));
    console.log(alf);
    
    for(var i = 0; i < alf; i++){
      alfaArray.push(new alfabubble(random(width), random(height)));
    }
    
    for(var i = 0; i < alfaArray.length; i++){
      alfaArray[i].display();
    }
    
    alfaArray = [];
  }
  
  // create betaboolsection
  // create gammaboolsection

 // bubble1.display();
  


}

function alfarandom() {
  if (alfabool == false) {
    alfabool = true;
  
  } else {
    alfabool = false;
  }
  console.log(alfabool);
}




function alfabubble(tempX, tempY) {
  this.x = tempX;
  this.y = tempY;
  this.diameter = 50;

  this.display = function() {
    fill("green");
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }

}