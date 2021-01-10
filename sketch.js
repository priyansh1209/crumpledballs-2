
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground
var box1,box2,box3
var ball
var dustbin, dustbinImage
function preload(){
 dustbinImage = loadImage("dustbingreen.png")
}
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Platform(400,650,800,10)
	box1 = new Box(500,630,200,25)
	box2 = new Box(413,567,25,100)
	box3 = new Box(587,567,25,100)
	ball = new PaperBall(50,200,20)
	Engine.run(engine);
  console.log(ball.body)
  console.log(ball)
}


function draw() {
  background(255);
	ground.display()
	box1.display()
	box2.display() 
	box3.display()
	ball.display()
	image(dustbinImage,500,567,300,150)
	

}

function keyPressed(){
	if (keyCode === 32){
		Matter.Body.setMass(ball.body, 0.7)
		Matter.Body.applyForce(ball.body,{x: ball.body.position.x, y:ball.body.position.y}, {x: 0.02, y: -0.03})
	}
	// if(ball.isTouching(box1)){
	// 	Matter.Body.applyForce(ball.body,ball.body.position,{x:0,y:0})

	// }

}

