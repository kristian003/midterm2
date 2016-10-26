var alf = 0;
var beta = 0;
var gamma = 0

var alfbutton;
var betabutton;
var gammabutton;

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