const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,object,ball;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  var object_options = {
    isStatic : true
  }
  object = Bodies.rectangle(200,390,200,50,object_options);  
  World.add(world,object);
  var ball_options = {
    restitution:0.9
  }
ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);
} 

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x, object.position.y, 400 , 50);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}