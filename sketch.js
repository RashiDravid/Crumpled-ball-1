
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1;
var paper;
var ground;


function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	
	ground = new Ground(width/2,560,width,20);
	
	paper = new Paper(100,500,50);
	
	dustbin1 = new Dustbin(800,538,150,15);
	dustbin2 = new Dustbin(723,505,20,80);
	dustbin3 = new Dustbin(873,505,20,80);

    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine);
 
paper.display();
ground.display();
dustbin1.display();
dustbin2.display();
dustbin3.display();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:110,y:-110});
	}
  }



