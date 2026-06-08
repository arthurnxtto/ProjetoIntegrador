let chuvadeestrelas = [];
let foguete, x = -70;

function preload() {
  foguete = loadImage("images/foguete.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);

  let botao2 = createButton("...");
  botao2.position(windowWidth - 40, 10);
  botao2.mousePressed(() => {
    window.location.href = "index.html";
  });

  for (let i = 0; i < 300; i++) {
    chuvadeestrelas[i] = [];
    chuvadeestrelas[i][0] = random(-width, width);
    chuvadeestrelas[i][1] = random(height);
    chuvadeestrelas[i][2] = random(1, 5);
  }
}

function draw() {
  background(0, 120);

  for (let i = 0; i < chuvadeestrelas.length; i++) {
    let vel = map(chuvadeestrelas[i][2], 1, 5, 3, 3);
    let esp = map(chuvadeestrelas[i][2], 1, 5, 0.5, 2.5);
    let tam = map(chuvadeestrelas[i][2], 1, 5, 4, 12);

    strokeWeight(esp);

    line(
      chuvadeestrelas[i][0],
      chuvadeestrelas[i][1],
      chuvadeestrelas[i][0] + tam / 2,
      chuvadeestrelas[i][1] + tam
    );

    chuvadeestrelas[i][0] += vel * 0.5;
    chuvadeestrelas[i][1] += vel;

    if (chuvadeestrelas[i][1] > height) {
      chuvadeestrelas[i][0] = random(-width, width);
      chuvadeestrelas[i][1] = random(-100, -10);
    }

    if (chuvadeestrelas[i][0] > width + 50) {
      chuvadeestrelas[i][0] = random(-200, -50);
      chuvadeestrelas[i][1] = random(height);
    }
  }

  espaco();
}

function espaco() {
  fill(25);

  let y = map(x, -30, width, height - 100, 50);

  image(foguete, x, y, 70, 70);

  x += 3;

  if (x > width + 70) {
    x = -70;
  }
}