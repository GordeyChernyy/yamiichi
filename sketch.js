var pts = [];
var data = [];
var counter = 0;
function preload(){
	var id = urlParam('portraitId');
	print(id);

	data = loadJSON("assets/portraitData" + id + ".json");

	console.log(data.length);
}
var urlParam = function(name, w){
    w = w || window;
    var rx = new RegExp('[\&|\?]'+name+'=([^\&\#]+)'),
        val = w.location.search.match(rx);
    return !val ? '':val[1];
}
function setup(){
   	createCanvas( windowWidth, windowHeight );
	clearPts();
	background(255);
}
function draw(){
	// events
	if(data[counter]['click'] == true){
		console.log(data[counter]['click']);
		clearPts();
	}

	// draw
	drawBrush(data[counter]['x'], data[counter]['y']);
	
	// counter
	counter++;
	if(counter > Object.keys(data).length-1){
		counter = 0;
		clear();
		console.log(counter);
	}
}
function clearPts() {
	pts =[];
}

function mousePressed(){
  
}

function drawBrush(x, y){
  var mouseV = createVector(x, y);
  pts.push(createVector(x, y));
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