//step 1= include lib in index.html
//step 2= namespacing
const Engine=Matter.Engine;//creates the physics engine
const World= Matter.World;//create the physics world to add bodies
const Bodies = Matter.Bodies;//create the bodies

var engine,world, ground;
var ball;
function setup() {
  createCanvas(400,400);
  //step 3= create the engine & the world
  engine = Engine.create();
  world = engine.world;

  var ground_options={
    isStatic:true
  }
  //restitution is the bounciness of the ball
  var ball_options = {
    restitution:1.0
  }

  //step 4= create bodies & add to the world
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ground);
  World.add(world,ball);
  //console.log(object);
  //onsole.log(object.type);
  //console.log(object.position.x);
  //console.log(object.position.y);

  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0,0,0);  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

  Engine.update(engine);
  //drawSprites();
}