var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var RZ1Sprite, RZ2Sprite, RZ3Sprite;
var RZ1, RZ2, RZ3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2

	helicopterSprite= createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	
	RZ1Sprite=createSprite(width/2, 650, 200,20);
    RZ1Sprite.shapeColor=color(255,0,0);

	RZ2Sprite=createSprite(490, 600, 20,100);
	RZ2Sprite.shapeColor=color(255,0,0);

	RZ3Sprite=createSprite(310, 600, 20,100);
	RZ3Sprite.shapeColor=color(255,0,0);
	
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , { isStatic:true});
	World.add(world, packageBody);
	
	RZ1= Bodies.rectangle(400,650 , 200,20, {isStatic:true});
	World.add(world, RZ1);
	RZ2= Bodies.rectangle(490, 600, 20,100, {isStatic:true});
	World.add(world, RZ2);
	RZ3= Bodies.rectangle(310, 600, 20,100, {isStatic:true});
	World.add(world, RZ3);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody, false);
    
  }
}



