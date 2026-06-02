let carro1, carro2;
let x1 = 0;
let y1 = 220;
let x2 = 700;
let y2 = 370;
let velocidade1 = 0;
let velocidade2 = 0;


function preload(){
  carro1 = loadImage("images/carro.png");
  carro2 = loadImage("images/taxi.png");
}

function setup() {
  createCanvas(800, 800);
  
  
}

function draw() {
  background(220);
  fill(0);
  noStroke();
  rect(0, 200, 800, 300);
  
  

  stroke(255, 255, 0); 
  strokeWeight(5);
  line(0, 350, 200, 350);
  line(250, 350, 450, 350);
  line(500, 350, 700, 350);
  line(750, 350, 800, 350);
  
  
  image(carro1, x1,y1,100,100);
  image(carro2, x2,y2,100,100);
  
   // movimento
  x1 += velocidade1;
  x2 -= velocidade2;


if(x1 > 900){
        window.location.href = 'PI3.html';
    }
    else if(x2 < -100){
      window.location.href = 'PI2.html';
    }
    
  
}

function mousePressed(){
   if (mouseX > x1 && mouseX < x1 + 400 && mouseY > y1 && mouseY < 400) {
    
      velocidade1 = 5;
     

   }
  if (mouseX > x2 && mouseX < x2 + 400 && mouseY > y2 && mouseY > 400) {
    
      velocidade2 = 5;
     

   }
  
  
    
}
 