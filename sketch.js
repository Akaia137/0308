function setup() {
  createCanvas(400, 400);
  
}
let x=0
function draw() {
  if(mouseIsPressed){
    noStroke();
    fill(200, x/2, x);
    arc(mouseX, mouseY, 80, 80, mouseY-PI, 0);
    x=x-0.3
  }
  else{
    noStroke();
    fill(200, x/2, x);
    arc(mouseX, mouseY, 80, 80, mouseY-PI, 0);
    x=x+0.3
  }
  //background(220);
 
}