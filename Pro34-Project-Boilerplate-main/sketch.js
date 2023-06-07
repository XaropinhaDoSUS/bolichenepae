const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bola;
var pino;
var cenario;
var chao;
var bola2;
var pino2;
var pino3;
var pino4;

function preload() {
  cenario = loadImage("images/cenario.jpg");
  bola2 = loadImage("images/bola.png");
  pino2 = loadImage("images/pino.png");
  
}

function setup() {
  createCanvas(650, 350);

  engine = Engine.create();
  world = engine.world;
  chao = Bodies.rectangle(325, 320, 650, 30, { isStatic: true });
  World.add(world, chao);

  bola = Bodies.circle(200, 200, 50);
  World.add(world, bola);

  pino = Bodies.rectangle(400, 200, 30, 80);
  pino3 = Bodies.rectangle(430, 200, 30, 80);
  pino4 = Bodies.rectangle(415, 100, 30, 80);

  World.add(world, pino);
  World.add(world, pino3);
  World.add(world, pino4);
}

function draw() {
  background(51);
  Engine.update(engine);
  imageMode(CENTER);
  image(cenario, 325, 175, 650, 350);

  image(bola2, bola.position.x, bola.position.y, 50, 50);

  push()
  translate(pino.position.x, pino.position.y)
  rotate(pino.angle)
  image(pino2,0, 0, 30, 80); 
  pop()

  push()
  translate(pino3.position.x, pino3.position.y)
  rotate(pino3.angle)
  image(pino2, 0, 0, 30, 80);
  pop()

  push()
  translate(pino4.position.x, pino4.position.y)
  rotate(pino4.angle)
  image(pino2, 0, 0, 30, 80);
  pop()

  fill("white");
  text(mouseX + "," + mouseY, mouseX, mouseY);
}

function keyPressed() {
  Matter.Body.applyForce(bola, { x: 0, y: 0 }, { x: 0.09, y: 0 });
}
