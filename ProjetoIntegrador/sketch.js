let carro1, carro2;

let x1 = 0;
let y1 = 500;

let x2 = 1680;
let y2 = 700;

let velocidade1 = 0;
let velocidade2 = 0;

function preload() {
  carro1 = loadImage("images/carro.png");
  carro2 = loadImage("images/taxi.png");
}

function setup() {
  createCanvas(1850, 900);
}

function draw() {
  background(220);


background(135, 206, 235);


fill(255, 220, 0);
noStroke();
circle(150, 120, 100);


fill(255);
circle(400, 120, 50);
circle(430, 120, 50);
circle(460, 120, 50);

circle(1200, 150, 50);
circle(1230, 150, 50);
circle(1260, 150, 50);


fill(50, 180, 75);
rect(0, 400, 1850, 100);


fill(120, 80, 40);
rect(300, 320, 20, 80);

fill(0, 150, 0);
circle(310, 300, 70);

fill(120, 80, 40);
rect(1500, 320, 20, 80);

fill(0, 150, 0);
circle(1510, 300, 70);


fill(220, 100, 100);
rect(750, 280, 200, 120);

fill(150, 50, 50);
triangle(720, 280, 850, 180, 980, 280);


fill(120, 70, 20);
rect(830, 330, 40, 70);


fill(180, 230, 255);
square(780, 310, 40);
square(880, 310, 40);


fill(0);
rect(0, 500, 1850, 500);


stroke(255, 255, 0);
strokeWeight(10);

line(0,700,200,700);
line(300,700,500,700);
line(600,700,800,700);
line(900,700,1100,700);
line(1200,700,1400,700);
line(1500,700,1700,700);
line(1800,700,2000,700);

  
  image(carro1, x1, y1, 170, 170);
  image(carro2, x2, y2, 170, 170);

  
  x1 += velocidade1;
  x2 -= velocidade2;

  if(x1 > 2100){
        window.location.href = 'PI3.html';
    }
    else if(x2 < -180){
      window.location.href = 'PI2.html';
    }


}
function mousePressed() {

  
  if (
    mouseX > x1 &&
    mouseX < x1 + 250 &&
    mouseY > y1 &&
    mouseY < y1 + 250
  ) {
    velocidade1 = 10;
  }

  
  if (
    mouseX > x2 &&
    mouseX < x2 + 250 &&
    mouseY > y2 &&
    mouseY < y2 + 250
  ) {
    velocidade2 = 10;
  }
}