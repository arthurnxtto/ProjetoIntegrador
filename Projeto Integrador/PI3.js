let carro1;
let x1 = -120;
let y1 = 520;
let velocidade1 = 5;


function preload(){
  carro1 = loadImage("images/carro.png");
}

function setup() {
  createCanvas(800, 800);
  
  
}

function draw() {
  background(135, 206, 235);
  
  //sol
  fill(255, 220, 0);
  noStroke();
  circle(90, 100, 100);
  
  //nuvens
  fill(255);
  circle(400,100,50);
  circle(430,100,50);
  circle(460,100,50);
  circle(600,130,50);
  circle(630,130,50);
  circle(660,130,50);
  circle(230,130,50);
  circle(260,130,50);
  circle(290,130,50);
  
  //areia
  fill(224, 192, 120);
  rect(0, 250, 800, 250);
  
  // PIRÂMIDES
  fill(198, 168, 118);
  triangle(120, 400, 250, 230, 380, 400);
  triangle(280, 420, 450, 180, 620, 420);
  triangle(520, 410, 650, 260, 780, 410);
  fill(160, 130, 90, 150);
  triangle(250, 400, 380, 400, 250, 230);
  triangle(450, 420, 620, 420, 450, 180);
  triangle(650, 410, 780, 410, 650, 260);
  
  //estrada
  noStroke();
  fill(0);
  rect(0, 500, 800, 300);
  stroke(255, 255, 0);
  strokeWeight(5);
  line(0, 650, 120, 650);
  line(180, 650, 300, 650);
  line(360, 650, 480, 650);
  line(540, 650, 660, 650);
  line(720, 650, 800, 650);
  
  
  
  
  image(carro1, x1,y1,100,100);
  
  
   // movimento
  x1 += velocidade1;
  

  // para no final
  if (x1 > 400) {
    velocidade1 = 0; 
  }
  
}

function mousePressed(){
 
  if (mouseX >= 575 && mouseX <= 685 && mouseY >= 110 && mouseY <= 160) {
    window.location.href = 'PI2.html';
  }
  


  if (mouseX >= 40 && mouseX <= 140 && mouseY >= 50 && mouseY <= 150) {
    window.location.href = 'PI2.html';
  }
}