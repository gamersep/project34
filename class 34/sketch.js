const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var bg
var engine, world;
var ground,rope,ball,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10
function preload() {
  bg=loadImage("image/bg.jpg")
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  ground=new Ground(600,600,2000,20)
  ball=new Ball(200,200,200,200)
  rope=new Rope(ball.body,{x:500,y:50})
  b1=new Box(700,100,300,100)
  b2=new Box(700,100,300,100)
  b3=new Box(700,100,300,100)
  b4=new Box(700,100,300,100)
  b5=new Box(700,100,300,100)

   
}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display()
  ball.display()
  rope.display()
  b1.display()
  b2.display()
  b3.display()
  b4.display()
  b5.display()
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
  
}



