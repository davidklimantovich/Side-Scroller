// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 2: Array of Particles, multiple forces
var person;
function setup() {
  createCanvas(640, 640);
  person = new Person();
  
}

function draw() {
  background(100);
 person.update();
 person.display();
  
  
  fill(124,124,124,124);
  rect(400,height-50,50,50);
  }
