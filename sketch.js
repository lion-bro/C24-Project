const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

function setup(){
	var canvas = createCanvas(1200,400);

	engine = Engine.create();
	world = engine.world;

	ball = new Ball(150,320);

	ground = new Ground(600,390,1200,20);

	box1 = new Box(900,380,120,20);
	box2 = new Box(850,340,20,100);
	box3 = new Box(950,340,20,100);
}

function draw(){
	background("black");
	Engine.update(engine);

	ball.display();

	ground.display();

	box1.display();
	box2.display();
	box3.display();

	keyPressed();
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball.body,ball.body.position,{x:10,y:-15});

	}
}