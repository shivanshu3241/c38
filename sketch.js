const Engine = Mtter.Engine;
const World = Mtter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup() {
    var canvas = createCanvas(400,400);
     engine = Engine.create();
     world = engine.world;
    
    ground = new Ground(200,390,400,20);

}

function draw() {
    background(0)
    Engine.update(engine);
    console.log(ground);

    ground.display();
