const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, body;
var paperObject;
var groundl
var dustbinSide1, dustbinSide2, dustbinSide3;

function preload(){
	
}

function setup() {
	createCanvas(1200, 200);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,180,1200,10);
	dustbinSide1 = new Dustbin(990,167,165,13);
	dustbinSide2 = new Dustbin(1080,129,13,60);
	dustbinSide3 = new Dustbin(900,129,13,60);
	paperObject = new Paper(30,80,20);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  dustbinSide1.display();
  dustbinSide2.display();
  dustbinSide3.display();
  paperObject.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x:85,y:-85})
	}
}