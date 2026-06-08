let carro1;
let x1 = 2030;
let y1 = 520;
let velocidade1 = 10;


function preload(){
  carro1 = loadImage("images/taxi.png");
}

function setup() {
  createCanvas(1850, 900);
  
  
}

function draw() {
  background(10, 10, 40);
  
  
  fill(130);
  noStroke();
  circle(1700, 100, 120);
  
  
  fill(35);
  rect(90,200,200,400);
  fill(255,255,0,150);
  square(110,230,60);
  square(210,230,60);
  square(110,310,60);
  square(210,310,60);
  square(110,390,60);
  square(210,390,60);
  fill(80,0,120);
  rect(340, 250, 180, 250);
  triangle(340, 250, 430, 180, 520, 250);
  fill(255, 150, 255, 160);
  square(370, 280, 40);
  square(450, 280, 40);
  square(370, 350, 40);
  square(450, 350, 40);
  square(370, 420, 40);
  square(450, 420, 40);
  fill(20, 40, 120);
  rect(700, 250, 180, 250);
  fill(255, 255, 150, 180);
  square(730, 280, 40);
  square(810, 280, 40);
  square(730, 350, 40);
  square(810, 350, 40);
  square(730, 420, 40);
  square(810, 420, 40);
  fill(120, 30, 30);
  rect(950, 180, 220, 320);
  fill(255, 255, 150, 180);
  square(990, 220, 50);
  square(1080, 220, 50);
  square(990, 310, 50);
  square(1080, 310, 50);
  square(990, 400, 50);
  square(1080, 400, 50);
  fill(70);
  rect(1450, 250, 180, 250);
  triangle(1450, 250, 1540, 180, 1630, 250);
  fill(180, 220, 255);
  square(1480, 280, 40);
  square(1560, 280, 40);
  square(1480, 350, 40);
  square(1560, 350, 40);
  square(1480, 420, 40);
  square(1560, 420, 40);



  fill(255);
  noStroke();
  circle(200, 80, 3);
  circle(400, 120, 3);
  circle(600, 50, 3);
  circle(900, 150, 3);
  circle(1100, 90, 3);
  circle(1400, 60, 3);
  circle(1600, 180, 3);
  circle(1750, 40, 3);
  
  
  
  
  fill(0);
  noStroke();
  rect(0, 500, 1850, 500);

  
  stroke(255, 255, 0);
  strokeWeight(10);
  line(0,700,200,700)
  line(300,700,500,700)
  line(600,700,800,700)
  line(900,700,1100,700)
  line(1200,700,1400,700)
  line(1500,700,1700,700)
  line(1800,700,2000,700)

 
 noStroke()
  fill(100, 60, 20);
  rect(1300, 430, 20, 70);
  fill(0, 120, 0);
  circle(1310, 400, 70);
  circle(1280, 420, 60);
  circle(1340, 420, 60);


  
  stroke(100);
  strokeWeight(8);
  line(600, 480, 600, 350);
  fill(255, 255, 100);
  noStroke();
  circle(600, 350, 30);
  
   
  noStroke();
  fill(80);
  rect(0, 480, 1850, 20);
  
  
  
  
  
  image(carro1, x1,y1,170,170);
  
  
   
  x1 -= velocidade1;
  

  
  if (x1 < 800) {
    velocidade1 = 0; 
  }
  
}

function mousePressed(){
 if(mouseX >= 110 && mouseX <= 170 && mouseY >= 230 && mouseY <= 290){
  window.location.href = 'PI4.html';
 }
  
 if(mouseX >= 1250 && mouseX <= 1360 && mouseY >= 370 && mouseY <= 440){
  window.location.href = 'PI5.html';
 }
  
}