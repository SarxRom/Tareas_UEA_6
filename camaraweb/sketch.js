let capture;

function setup() {
  createCanvas(windowWidth, windowHeight);
 capture= createCapture(VIDEO,{flipped: true});
 capture.size(200,200);
 capture.hide(400,400);

}

function draw() {
  background(220);
  image(capture,420,125,400,300);
}