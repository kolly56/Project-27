
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
 

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof= new Roof(400,200,400,30);

	bob1=new Bob(100,480,25);
	bob2=new Bob(150,485,25);
	bob3=new Bob(200,490,25);
	bob4=new Bob(250,495,25);
	bob5=new Bob(300,500,25);

	rope1=new Rope(bob1.bodu,roof.body,-90);
	rope2=new Rope(bob2.bodu,roof.body,-45);
	rope3=new Rope(bob3.bodu,roof.body,0);
	rope4=new Rope(bob4.bodu,roof.body,45);
	rope5=new Rope(bob5.bodu,roof.body,90);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-55,y:-55});
	}
}

