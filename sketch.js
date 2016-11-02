var pts = [];

function preload(){
	
}

function setup(){
   createCanvas( windowWidth, windowHeight );
   clearPts();
  background(255);
}

function clearPts() {
  pts =[];
}

function mousePressed(){
  
}

function mouseDragged(){
  var mouseV = createVector(mouseX, mouseY);
  pts.push(createVector(mouseX, mouseY));
  stroke(0, 30);
  for(var i = 0; i < pts.length; i++){
    if (mouseV.dist(pts[i])/200 < random(0.4)) {
      line(pts[i].x, pts[i].y, mouseV.x, mouseV.y);
    }
  }
}
function mouseReleased(){
	clearPts();
}
function keyPressed(){
	if (key == ' ') clearPts();
}

function windowResized(){
    resizeCanvas( windowWidth, windowHeight );
}