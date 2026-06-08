let carro1;
let x1 = -180;
let y1 = 520;
let velocidade1 = 10;


function preload(){
  carro1 = loadImage("images/carro.png");
}

function setup() {
  createCanvas(1850, 900);
  
  
}

function draw() {
  background(135, 206, 235);
  
  
  noStroke();
  fill(255, 240, 120, 80);
circle(120, 100, 180);

fill(255, 220, 0);
circle(120, 100, 120);

fill(255);
circle(250, 130, 60);
circle(290, 130, 60);
circle(330, 130, 60);
circle(600, 100, 60);
circle(640, 100, 60);
circle(680, 100, 60);
circle(1000, 130, 60);
circle(1040, 130, 60);
circle(1080, 130, 60);
circle(1450, 120, 50);
circle(1480, 120, 50);
circle(1510, 120, 50);
circle(1650, 170, 45);
circle(1680, 170, 45);
circle(1710, 170, 45);
  

fill(224, 192, 120);
rect(0, 250, 1850, 250);


fill(198, 168, 118);
triangle(450, 450, 650, 230, 850, 450);
fill(170, 145, 100);
triangle(650, 230, 650, 450, 850, 450);
fill(198, 168, 118);
triangle(1150, 460, 1350, 260, 1550, 460);
fill(170, 145, 100);
triangle(1350, 260, 1350, 460, 1550, 460);
fill(198, 168, 118);
triangle(750, 470, 1000, 150, 1250, 470);
fill(170, 145, 100);
triangle(1000, 150, 1000, 470, 1250, 470);


  
    
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
  
  
  
  
  image(carro1, x1,y1,170,170);
  
  
   
  x1 += velocidade1;
  

  
  if (x1 > 800) {
    velocidade1 = 0; 
  }
  
}

function mousePressed(){
 
  if (mouseX >= 1630 && mouseX <= 1735 && mouseY >= 150 && mouseY <= 180) {
    window.location.href = 'PI6.html'; 
  }
  


  if (mouseX >= 60 && mouseX <= 180 && mouseY >= 45 && mouseY <= 170) {
    window.location.href = 'PI7.html';
  }
}