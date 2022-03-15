
function setup() {
  createCanvas(300, 300);
  background(200);

  // push(); // Start a new drawing state
  // strokeWeight(5);
  // stroke(255,0,0);
  // point(150, 120);
  // //noStroke(); -> 뒤에 도형은 다 지워짐
  // pop(); // Restore original state
  // point(150, 180);

  // push(); // Start a new drawing state
  // strokeWeight(10);
  // stroke(0,255,0);
  // line(0, 0, 300, 300);
  // pop();

  // line(300, 0, 0, 300);

  push();
  //rectMode => CORNER, CORNERS, CENTER, or RADIUS
  rectMode(CENTER)  
  
  push();
  strokeWeight(3);
  stroke(0,255,255);
  fill(255,0,0);
  rect(150,150,100,100);
  pop();

  pop();

    //ellipseMode => CENTER, RADIUS, CORNER, or CORNERS
  ellipseMode(CENTER)
  ellipse(150,150,100,100);

  rect(150,150,100,100);

}

function draw(){
  
}
