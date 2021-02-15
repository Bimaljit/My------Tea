const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup(){

    createCanvas(800, 600);

    engine = Engine.create();
	world = engine.world;

}

function draw(){

    rectMode(CENTER);

    backgrouund("red");

    Engine.update(engine);

    
}