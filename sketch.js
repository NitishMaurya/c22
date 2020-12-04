// NAMESPACING: NICKNAME

const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine;
var world;
var box1;
var box2;
var ground;
function setup(){
createCanvas(400,400);
//create my engine from Matter.js engine
engine = Engine.create();
//creating my world from Mtter.js world
world = engine.world;
//bodies
var boptions={
    restitution:1   //bounciness
}

var options={

    isStatic: true  //true- stop, false-move the object
}
box1 = Bodies.rectangle(200,100,50,50,boptions);//x,y,width,height
box2= Bodies.circle(100,50,50,boptions);
World.add(world,box1);
World.add(world,box2);
ground = Bodies.rectangle(200,380,400,40,options);
World.add(world,ground);


}

function draw(){
    background(0);
    //update everything
    Engine.update(engine);
    rectMode(CENTER);
    rect(box1.position.x,box1.position.y,50,50);
    rect(ground.position.x, ground.position.y,400,40);
    ellipseMode(RADIUS);
    ellipse(box2.position.x,box2.position.y, 50);
   
}