var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var boxpart1, boxpart2, boxpart3
var boxleftbody, boxrightbody, boxdownbody
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

	boxPosition = width/2 - 100;
	boxY = 610;
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	boxpart1=createSprite(boxPosition, boxY,20,100);
	groundSprite.shapeColor=color(255)

	boxpart2=createSprite(boxPosition + 100, boxY + 40,200,20);
	groundSprite.shapeColor=color(255)

	boxpart3=createSprite(boxPosition + 200, boxY,20,100);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);

	boxleftbody = Bodies.rectangle(boxPosition + 20, boxY, 20, 100, {isStatic:true});
	World.add(world, boxleftbody);
	boxrightbody = Bodies.rectangle(boxPosition + 200 - 20, boxY, 20, 100, {isStatic:true});
	World.add(world, boxrightbody);
	boxdownbody = Bodies.rectangle(boxPosition + 100, boxY - 45 + 20, 100, 20, {isStatic:true});
	World.add(world, boxdownbody);

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
  boxpart1.x= boxleftbody.position.x 
  boxpart1.y= boxleftbody.position.y
  boxpart3.x= boxrightbody.position.x 
  boxpart3.y= boxrightbody.position.y
  boxpart2.x= boxdownbody.position.x 
  boxpart2.y= boxdownbody.position.y 
  drawSprites();
 
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW){
	helicopterSprite.X = helicopterSprite.X + 20;
	translation = {x: 20, y : 0}
	Matter.Body.translate(packageBody.translation)
  } else if (keyCode === LEFT_ARROW){
	helicopterSprite.X = helicopterSprite.X - 20;
	translation = {x: -20, y : 0}
	Matter.Body.translate(packageBody.translation)
  }else if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
  } 
}