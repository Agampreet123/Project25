
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1,dustbin2,dustbin3,dustbinImage,dustbinsprite
function preload()
{
	dustbinImage = loadImage("dustbingreen.png");
}

function setup() {
  createCanvas(1000, 700);
  dustbinsprite = createSprite(825,520,50,50);
  dustbinsprite.addImage(dustbinImage);
  dustbinsprite.scale = 0.5
  dustbin1 = createSprite(width/2+250,520,10,140);
dustbin1.shapeColor =color(255);
dustbin1.visible = false
dustbin2 = createSprite(width/2+325,590,160,10);
dustbin2.shapeColor = color(255);
dustbin2.visible = false
dustbin3 = createSprite(width/2+400,520,10,140);
dustbin3.shapeColor = color(255);
dustbin3.visible = false
	engine = Engine.create();
  world = engine.world;
  
ground = new Ground(400,600,1200,15);
paper = new Paper(100,570,22);

	
dustbin1 = Bodies.rectangle(width/2+250,520,10,140,{isStatic:true});
	 World.add(world,dustbin1);
	 dustbin2 = Bodies.rectangle(width/2+325,590,160,10,{isStatic:true});
	 World.add(world,dustbin2);
	 dustbin3 = Bodies.rectangle(width/2+400,520,10,140,{isStatic:true});
	 World.add(world,dustbin3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(114,114,114);
  Engine.update(engine);
  ground.display()
  paper.display()
  drawSprites();
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  }
}


