let frase1 = "";
let frase2 = "";
let frase3 = "";
let frase4 = "";
let frase5 = "";
let frase6 = "";
let frase7 = "";
let frase8 = "";
let frase9 = "";
let frase0 = "";

let fondoColor;
let textoColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fondoColor = color(255, 255, 235);
  textoColor = color(0);
}

function draw() {
  background(fondoColor);
  fill(textoColor);
  textSize(50);
  text(frase1, 100, 100);
  text(frase2, 100, 200);
  text(frase3, 100, 300);
  text(frase4, 100, 400);
  text(frase5, 100, 500);
  text(frase6, 600, 100);
  text(frase7, 600, 200);
  text(frase8, 600, 300);
  text(frase9, 600, 400);
  text(frase0, 600, 500);
}

function keyPressed() {
  if (key === 'q') {
    frase1 = "Yo en el río";
    fondoColor = color(200, 230, 255);
    textoColor = color(20, 40, 80);
  }
  if (key === 'w') {
    frase2 = "Y tú en el mar";
    fondoColor = color(200, 230, 255);
    textoColor = color(20, 40, 80);
  }
  if (key === 'e') {
    frase3 = "Escribo poco";
    fondoColor = color(255, 245, 230);
    textoColor = color(150, 80, 20);
  }
  if (key === 'r') {
    frase4 = "por que poco";
    fondoColor = color(255, 245, 230);
    textoColor = color(150, 80, 20);
  }
  if (key === 't') {
    frase5 = "es lo que dejas";
    fondoColor = color(220, 220, 255);
    textoColor = color(102, 0, 102);
  }
  if (key === 'y') {
    frase6 = "cuando llegas";
    fondoColor = color(220, 220, 255);
    textoColor = color(102, 0, 102);
  }
  if (key === 'u') {
    frase7 = "y te vas";
    fondoColor = color(220, 220, 255);
    textoColor = color(102, 0, 102);
  }
  if (key === 'i') {
    frase8 = "Me alejo lento";
    fondoColor = color(255, 250, 240);
    textoColor = color(77, 51, 25);
  }
  if (key === 'o') {
    frase9 = "porque lento";
    fondoColor = color(255, 250, 240);
    textoColor = color(120, 60, 0);
  }
  if (key === 'p') {
    frase0 = "es como se irme";
    fondoColor = color(255, 250, 240);
    textoColor = color(120, 60, 0);
  }
}
