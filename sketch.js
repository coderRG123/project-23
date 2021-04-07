var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, pz1, pz2, pz3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;




	var packageBody_options={
		isStatic:true
	}


	packageBody = Bodies.circle(width/2 , 200 , 5 ,packageBody_options);
	World.add(world, packageBody);

	


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);

	
	

	//package zone
     pz1= Bodies.rectangle(400, 650, 200, 20,{isStatic:true});
	 World.add(world, pz1);
  
	 pz2= Bodies.rectangle(310, 600, 20, 100,{isStatic:true});
	 World.add(world, pz2);

	 pz3= Bodies.rectangle(490, 600, 20, 100, {isStatic:true});
	 World.add(world, pz3);
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y

  fill("red");
  rect(pz1.position.x, pz1.position.y, 200, 20);
  rect(pz2.position.x, pz2.position.y, 20, 100);
  rect(pz3.position.x, pz3.position.y, 20, 100);

  if (keyDown("down")) { 


	Matter.Body.setStatic(packageBody, false);

	
  }

  drawSprites();
 
}














