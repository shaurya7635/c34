const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  Box1 = new Box(900,100,70,70);
  Box2 = new Box(900,100,70,70);
  Box3 = new Box(900,100,70,70);
  Box4 = new Box(900,100,70,70);
  Box5 = new Box(900,100,70,70);
  ball = new Ball(250,200,80,80);
  rope = new Rope(ball.body,{x: 700, y:50})



}

function draw() {
  background(180);
  Engine.update(engine);
  ground.display();
  Box1.display();
  Box2.display();
  Box3.display();
  Box4.display();
  Box5.display();
  ball.display();
  rope.display();

  



}





