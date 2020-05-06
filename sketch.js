var sball;
var position;
var database;
var drawing = [];
var currentPath = [];

function setup(){
    var canvas = createCanvas(600,600);
    canvas.mousePressed(startPath);
    canvas.mouseReleased(endPath);
}
function startPath(){
    currentPath = [];
    drawing.push(currentPath);
}function endPath(){
    
}
function draw(){
    background('red');

    if(mouseIsPressed) {
        var point = {
            x: mouseX,
            y: mouseY
        }
        currentPath.push(point);
    }
    noFill("black");
    stroke(255);
    strokeWeight(4);
    
    for(var i = 0; i< drawing.length; i++){
        var path = drawing[i];
        beginShape();
        for(var j = 0; j< path.length; j++){
            vertex(path[j].x, path[j].y);
        }
        endShape();
    }
    
}

