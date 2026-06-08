let bandeira = false;

function setup() {
  createCanvas(windowWidth, windowHeight);

  let botao = createButton("...");
  botao.position(10, 10);
  botao.mousePressed(() => {
    bandeira = true;
  });

  let botao2 = createButton("...");
  botao2.position(windowWidth - 40, 10);
  botao2.mousePressed(() => {
    window.location.href = "index.html";
  });
}

function draw() {
  background(135, 206, 235);

  fill(90);
  triangle(
    width / 2 - 400,
    height,
    width / 2 - 200,
    height - 350,
    width / 2,
    height
  );

  fill(110);
  triangle(
    width / 2 - 200,
    height,
    width / 2,
    height - 550,
    width / 2 + 200,
    height
  );

  fill(100);
  triangle(
    width / 2,
    height,
    width / 2 + 200,
    height - 400,
    width / 2 + 400,
    height
  );

  fill(255);

  triangle(
    width / 2 - 240,
    height - 280,
    width / 2 - 200,
    height - 350,
    width / 2 - 160,
    height - 280
  );

  triangle(
    width / 2 - 60,
    height - 390,
    width / 2,
    height - 550,
    width / 2 + 60,
    height - 390
  );

  triangle(
    width / 2 + 160,
    height - 320,
    width / 2 + 200,
    height - 400,
    width / 2 + 240,
    height - 320
  );

  fill(245);
  rect(0, height - 80, width, 80);

  pinheiro(90, height - 80, 1);
  pinheiro(200, height - 80, 0.8);

  pinheiro(width - 90, height - 80, 1);
  pinheiro(width - 200, height - 80, 0.8);

  if (bandeira) {
    stroke(0);
    line(
      width / 2,
      height - 550,
      width / 2,
      height - 650
    );

    noStroke();
    fill("red");
    triangle(
      width / 2,
      height - 650,
      width / 2 + 50,
      height - 630,
      width / 2,
      height - 610
    );
  }
}

function pinheiro(x, y, s) {
  noStroke();

  fill(120, 80, 40);
  rect(
    x - 6 * s,
    y - 10 * s,
    12 * s,
    40 * s
  );

  fill(200);

  triangle(
    x - 40 * s,
    y,
    x,
    y - 90 * s,
    x + 40 * s,
    y
  );

  triangle(
    x - 35 * s,
    y - 25 * s,
    x,
    y - 110 * s,
    x + 35 * s,
    y - 25 * s
  );

  triangle(
    x - 30 * s,
    y - 50 * s,
    x,
    y - 130 * s,
    x + 30 * s,
    y - 50 * s
  );

  fill(255);

  ellipse(x, y - 70 * s, 12 * s);
  ellipse(x - 15 * s, y - 40 * s, 10 * s);
  ellipse(x + 15 * s, y - 40 * s, 10 * s);
}