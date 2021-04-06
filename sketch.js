const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world, ground ,ball

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world
  var options = {
    isStatic:true
  }
  ground = Bodies.rectangle(200,350,300,10,options);
  World.add(world,ground);
  var options1 = {
    restitution:0.1
  }
  ball = Bodies.circle(200,50,15,options1);
  World.add(world,ball);
  console.log(ground)
}

function draw() {
  background("black");
  Engine.update(engine);
  rectMode(CENTER)  
  rect(ground.position.x,ground.position.y,300,10)
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,15,15)
}