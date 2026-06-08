let estrela = [];

let solExplodiu = false; 
let solX;
let solY;
let solRaio = 80; 


let particulas = []; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  
   let botao2 = createButton("...");
  botao2.position(windowWidth - 40, 10);
  botao2.mousePressed(() => {
    window.location.href = "index.html";
  });

  solX = width / 2;
  solY = height / 2;


  for(let i = 0; i < 100; i++){
    estrela[i] = [];
    estrela[i][0] = random(width);
    estrela[i][1] = random(height);
    estrela[i][2] = random(1, 5);
  }
}

function draw() {

  background(0, 120);


  for(let i = 0; i < 100; i++){
    let vel = map(estrela[i][2], 1, 5, 3, 12);
    let esp = map(estrela[i][2], 1, 5, 0.5, 2.5);
    let tam = map(estrela[i][2], 1, 5, 4, 12);
    
    stroke(255);
    strokeWeight(esp);

    point(estrela[i][0], estrela[i][1], estrela[i][0], estrela[i][1] + tam);
    
    if(estrela[i][1] > height) {
      estrela[i][1] = random(-30, -5);
      estrela[i][0] = random(width);
    }
  }
  if (solExplodiu == false) {

    noStroke();
    
    fill(255, 150, 0, 100); 
    circle(solX, solY, solRaio * 2.5);
    
    
    fill(255, 204, 0); 
    circle(solX, solY, solRaio * 2);

  } else {
    noStroke();
    for (let i = particulas.length - 1; i >= 0; i--) {
      let p = particulas[i];
      fill(p.cor);
      circle(p.x, p.y, p.tamanho);
      
      p.x += p.velX;
      p.y += p.velY;
      p.tamanho *= 0.95; 

      if (p.tamanho < 0.5) {
        particulas.splice(i, 1);
      }
    }


    fill(255); 
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Parabéns, você condenou todos a escuridão eterna!\nEstá contente com a sua liberdade?", width / 2, height / 2 - 100);
  }
}


function mouseClicked() {
  if (solExplodiu == false) {

    let distancia = dist(mouseX, mouseY, solX, solY);
    if (distancia < solRaio) {
      solExplodiu = 
      gerarExplosao(solX, solY); 
    }
  }
}

function gerarExplosao(x, y) {
  for (let i = 0; i < 60; i++) {
    particulas.push({
      x: x,
      y: y,
      velX: random(-15, 15), 
      velY: random(-15, 15), 
      tamanho: random(10, 40),
      cor: color(255, random(50, 200), 0)
    });
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  solX = width / 2;
  solY = height / 2;
}