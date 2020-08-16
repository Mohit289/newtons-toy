
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5
var rope1
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1=new bob(200,470,40);
    bobObject2 =new bob(200,480,40);
	bobObject3 =new bob(200,490,40);
	bobObject4 =new bob(200,500,40);
	bobObject5=new bob(200,510,40);
    rope1=new rope(bobObject1.body,roofObject.body,-bobDiameter*2,0)
	Engine.run(engine);
  
}

display()
{
	var pointA=this.rope.bodyA.posirtion;
	var pointB=this.rope.bodyB.positiion;

	strokeWieght(2);

	var Anchor1X=pointA.x
	var Anchor1Y=pointA.y
	
	var Anchor1X=pointB.x+this.offsetX
	var Anchor1Y=pointB.y+this.offsetY
	
	line(Anchor1x,Anchor1y,Anchor2X,Anchor2Y);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
   bobObject1.display();
   bobObject2.display();
   bobObject3.display();
   bobObject4.display();
   bobObject5.display();
   rope1.display();
}



