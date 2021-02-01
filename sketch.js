const Engine = Matter.Engine; //Namespacing
const World = Matter.World;
const Bodies = Matter.Bodies;


var universe, earth, ground, ball;


function setup() {
  createCanvas(400,400);

  universe = Engine.create();
  earth= universe.world;

  var options = {

    isStatic : true
  }
  var bounce ={
    restitution :1
  }

  ground= Bodies.rectangle(200,380,400,50, options); //x,y,w,h     r =20
  ball =Bodies.circle(200, 200, 10, bounce); //x, y, r/2

  //console.log(humans.position.x);
  //console.log(humans.position.y);

  World.add(earth,ground);
  World.add(earth, ball)

  
}

function draw() {
  background("lightblue"); 

  Engine.update(universe);
  
  rectMode(CENTER);


  rect(ground.position.x,ground.position.y,400,50); //x,y,w,h

  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y, 20,20); //x,y,r, r


  //rect(200,200,50,50); //x,y,width,height
  
 
}