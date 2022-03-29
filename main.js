status="";

function setup() {
canvas=createCanvas(640,640);
canvas.center;
video=createCapture(VIDEO);
video.size(640,640);
video.hide();
}

function start() {
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
  object_name = document.getElementById("object_name").value;
}

function modelLoaded() {
console.log("ModelLoaded !")
status=true;
}

function draw() {
  image(video,0,0,380,380);
  
}
