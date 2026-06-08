let bauTaAberto = false; 
let bolhas = [];
let peixes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  let botao2 = createButton("...");
  botao2.position(windowWidth - 40, 10);
  botao2.mousePressed(() => {
    window.location.href = "index.html";
  });

  for (let i = 0; i < 20; i++) {
    bolhas.push({ x: random(width), y: random(height), tamanho: random(5, 15), vel: random(1, 3) });
  }
  
  for (let i = 0; i < 5; i++) {
    peixes.push({ x: random(width), y: random(height * 0.1, height * 0.6), vel: random(1, 3) });
  }
}

function draw() {
  background(30, 70, 200); 
  
  noStroke(); 
  
  fill(255, 255, 255, 100); 
  for (let b of bolhas) {
    circle(b.x, b.y, b.tamanho);
    b.y -= b.vel; 
    if (b.y < 0) b.y = height; 
  }
  
  fill(255, 120, 50); 
  for (let p of peixes) {
    ellipse(p.x, p.y, 40, 20); 
    triangle(p.x - 20, p.y, p.x - 35, p.y - 15, p.x - 35, p.y + 15); 
    p.x += p.vel; 
    if (p.x > width + 50) p.x = -50; 
  }
  
  stroke(0); 
  
  fill(250, 220, 50);
  rect(0, height * 0.8, width, height);
  
  if (bauTaAberto == true) {
    bauAberto();
    
    fill(255); 
    noStroke();
    textSize(32);
    textAlign(CENTER, CENTER); 
    text("O baú está vazio, espero que tenha aproveitado o mergulho", width / 2, height * 0.2); 
  } else {
    bauFechado();
  }
}

function mouseClicked() {
  let xFrente = width * 0.23;
  let yFrente = width * 0.47 + 30;
  let tamanho = 100;
  
  if (mouseX >= xFrente && mouseX <= xFrente + tamanho &&
      mouseY >= yFrente && mouseY <= yFrente + tamanho) {
    bauTaAberto = !bauTaAberto; 
  }
}

function bauFechado() {
  fill(150, 75, 0); 
  square(width*0.2, width*0.45+30, 100);

  quad(
    width*0.2, width*0.45+30,
    width*0.2 + 100, width*0.45+30,
    width*0.23 + 100, width*0.47+30,
    width*0.23, width*0.47+30
  );

  quad(
    width*0.2, width*0.45+30,
    width*0.23, width*0.47+30,
    width*0.23, width*0.47+30 + 100,
    width*0.2, width*0.45+30 + 100
  );

  square(width*0.23, width*0.47+30, 100);
}

function bauAberto() {
  fill(150, 75, 0); 
  quad(
    width*0.2, width*0.45+30,             
    width*0.2 + 100, width*0.45+30,       
    width*0.2 + 100, width*0.45+30 - 100, 
    width*0.2, width*0.45+30 - 100        
  );

  fill(50, 25, 0); 
  quad(
    width*0.2, width*0.45+30,
    width*0.2 + 100, width*0.45+30,
    width*0.23 + 100, width*0.47+30,
    width*0.23, width*0.47+30
  );

  fill(150, 75, 0); 
  quad(
    width*0.2, width*0.45+30,
    width*0.23, width*0.47+30,
    width*0.23, width*0.47+30 + 100,
    width*0.2, width*0.45+30 + 100
  );

  square(width*0.23, width*0.47+30, 100);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}