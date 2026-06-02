let carro1;
let x1 = 900;
let y1 = 520;
let velocidade1 = 5;


function preload(){
  carro1 = loadImage("images/taxi.png");
}

function setup() {
  createCanvas(800, 800);
  
  
}

function draw() {
  background(10, 10, 40);
  
  //lua
  fill(130);
  noStroke();
  circle(700, 100, 70);
  
  //predio
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
  x1 -= velocidade1;
  

  // para no final
  if (x1 < 400) {
    velocidade1 = 0; 
  }
  
}

function mousePressed(){
 if(mouseX >= 110 && mouseX <= 170 && mouseY >= 230 && mouseY <= 290){
  window.location.href = 'PI3.html';
 }
  
 if(mouseX >= 450 && mouseX <= 490 && mouseY >= 420 && mouseY <= 460){
  window.location.href = 'PI3.html';
 }
  
}