const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ball,polygon_img;

function preload(){
    polygon_img=loadImage("polygon.png");
  }

function setup() {
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    //1st pyramid
    //first
    block1 = new blocks(390,155,30,40);
    //second
    block2 = new blocks(360,195,30,40);
    block3 = new blocks(390,195,30,40);
    block4 = new blocks(420,195,30,40);
    //third
    block5 = new blocks(330,235,30,40);
    block6 = new blocks(360,235,30,40);
    block7 = new blocks(390,235,30,40);
    block8= new blocks(420,235,30,40);
    block9 = new blocks(450,235,30,40);
    //foruth
    block10 = new blocks(300,275,30,40);
    block11 = new blocks(330,275,30,40);
    block12 = new blocks(360,275,30,40);
    block13 = new blocks(390,275,30,40);
    block14 = new blocks(420,275,30,40);
    block15 = new blocks(450,275,30,40);
    block16 = new blocks(480,275,30,40);
    

    //ground for 1st pyramid 
    Ground1 = new ground(390,300,300,10);
    World.add(world,ground);
    
    //2nd pryramid 
    //first
    block17 = new blocks(990,100,30,40);
    //second
    block18 = new blocks(960,140,30,40);
    block19 = new blocks(990,140,30,40);
    block20 = new blocks(1020,140,30,40);
    //third
    block21 = new blocks(990,180,30,40);
    block22 = new blocks(960,180,30,40);
    block23 = new blocks(930,180,30,40);
    block24 = new blocks(1020,180,30,40);
    block25 = new blocks(1050,180,30,40);

   //ground for 2nd pyramid 
   Ground2 = new ground(990,200,200,10);

   ball = Bodies.circle(50,200,20);
   World.add(world,ball);
 
   slingShot = new Slingshot(this.ball,{x:100,y:200});
   World.add(world,ground);


    Engine.run(engine);
}

function draw() {
    background(190);

    textSize(20);
    fill("lightyellow");
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();

 
    Ground1.display();
    Ground2.display();

    slingShot.display();
  
    imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);
}
function mouseDragged(){
 
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});

}
function mouseReleased(){
  slingShot.fly();
    
}
function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.ball);
  }
}

