// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 2: Array of Particles, multiple forces
var person;
function setup() {
  createCanvas(1500, 640);
  person = new Person();
  
}

function keyPressed (){
  if(key == ' ') {
    var jump = createVector(0,-5)
    person.applyForce(jump)
  }
}


function draw() {
  background(51);
  
  
  translate(-person.pos.x+50,0);
  
  
  var gravity = createVector(0,0.9);
  person.applyForce(gravity);
  
  
 person.update()
  person.edges();
 person.display();
  
  
  fill(124,124,124,124);
  rect(400,height-50,50,50);
  }
