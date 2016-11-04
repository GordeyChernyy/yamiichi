var pts = [];
var data = [];
var counter = 0;
var appSettings = [];

// size
var scaleFactor;
var canvasWidth;
var canvasHeight;
var canvasOffsetX;

function preload(){
	var id = urlParam('portraitId');
	print(id);
	appSettings = loadJSON("assets/jsAppSettings.json");
	data = loadJSON("assets/portraitData" + id + ".json");
}
var urlParam = function(name, w){
    w = w || window;
    var rx = new RegExp('[\&|\?]'+name+'=([^\&\#]+)'),
        val = w.location.search.match(rx);
    return !val ? '':val[1];
}
function setup(){
   	createCanvas( windowWidth, windowHeight );
   	
   	calcScaleFactor();
	calcCanvasSize();

	clearPts();
	background(255);
}
function calcCanvasSize(){
	canvasHeight = windowHeight;
	canvasWidth = scaleFactor*appSettings[0]['canvasSize']['width'];
	canvasOffsetX = (windowWidth - canvasWidth)/2;
}
function calcScaleFactor(){
	scaleFactor = windowHeight/appSettings[0]['canvasSize']['height'];
	console.log(scaleFactor);
}
function draw(){
	// events
	// clear();
	// fill(255, 0, 0);
	// rect(toScreenX(0), 0, canvasWidth, canvasHeight);
	updateBrush();
}
function updateBrush(){
	if(data['frames'][counter]['click'] == true){
		console.log(data['frames'][counter]['click']);
		clearPts();
	}

	// draw
	var x = toScreenX(data['frames'][counter]['x']);
	var y = toScreenY(data['frames'][counter]['y']);
	drawBrush(x, y);
	
	// counter
	counter++;
	if(counter > Object.keys(data['frames']).length-1){
		counter = 0;
		clear();
		console.log(counter);
	}
}
function toScreenX(value){
	return value*scaleFactor + canvasOffsetX;
}
function toScreenY(value){
	return value*scaleFactor;
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
    calcScaleFactor();
	calcCanvasSize();
}