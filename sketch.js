const World=Matter.World;
const Body=Matter.Body;
const Bodies=Matter.Bodies;
const Engine=Matter.Engine;
const Constraint=Matter.Constraint;
const Render=Matter.Render;
var engine,world;
var g1,g2,g3;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21,b22,b23,b24,b25;
var ball,sling,render,backgroundImg;
function preload(){
  getTime();
}
function setup() {
  createCanvas(1200,500);
  engine=Engine.create();
  world=engine.world;
  g1=new Ground(600,480,1200,40);
  g2=new Ground(450,350,352,20);
  g3=new Ground(900,250,264,20);

  b1=new Box(318,305,44,70,"#82CBEF");
  b2=new Box(362,305,44,70,"#82CBEF");
  b3=new Box(406,305,44,70,"#82CBEF");
  b4=new Box(450,305,44,70,"#82CBEF");
  b5=new Box(494,305,44,70,"#82CBEF");
  b6=new Box(538,305,44,70,"#82CBEF");
  b7=new Box(582,305,44,70,"#82CBEF");

  b8=new Box(362,235,44,70,"#FFC8CC");
  b9=new Box(406,235,44,70,"#FFC8CC");
  b10=new Box(450,235,44,70,"#FFC8CC");
  b11=new Box(494,235,44,70,"#FFC8CC");
  b12=new Box(538,235,44,70,"#FFC8CC");

  b13=new Box(406,165,44,70,"#35D1D3");
  b14=new Box(450,165,44,70,"#35D1D3");
  b15=new Box(494,165,44,70,"#35D1D3");

  b16=new Box(450,95,44,70,"#828182");

  b17=new Box(812,205,44,70,"#82CBEF");
  b18=new Box(856,205,44,70,"#82CBEF");
  b19=new Box(900,205,44,70,"#82CBEF");
  b20=new Box(944,205,44,70,"#82CBEF");
  b21=new Box(988,205,44,70,"#82CBEF");

  b22=new Box(856,145,44,70,"#35D1D3");
  b23=new Box(900,145,44,70,"#35D1D3");
  b24=new Box(944,145,44,70,"#35D1D3");

  b25=new Box(900,75,44,70,"#FFC9CD");

  ball=new Ball(85,100,50,50,"#FFE900");
  sling=new SlingShot(ball.body,{x:205,y:100});
  var render=Render.create({
    element:document.body,
    engine:engine,
    options:{
      width:1200,
      height:600,
      showVelocity:true,
      wireframe:false
    }
  });
  Render.run(render);
}

function draw() {
  if(backgroundImg){
    background(backgroundImg);
}else{
  background("#3A2D2D");
}

  ball.display();
  drawSprites();
  g1.display();
  g2.display();
  g3.display();
  Engine.update(engine);
  b1.display();
  b3.display();
  b2.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();
  b19.display();
  b20.display();
  b21.display();
  b22.display();
  b23.display();
  b24.display();
  b25.display();

  sling.display();
  text(mouseX + "," + mouseY,mouseX,mouseY);
  Body.setMass(ball.body,2);
}

function mouseDragged(){
  ball.body.position.x=mouseX;
  ball.body.position.y=mouseY;
}

function mouseReleased(){
  sling.fly();
}
function keyPressed(){
  if(keyCode>=0 && keyCode<128){
    sling.attach(ball.body);
  }
}
async function getTime(){
  var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var data=await response.json();
  console.log(data.datetime.slice(11,13));
  var hours=data.datetime.slice(11,13);
  if(hours<=18 && hours>=07){
    backgroundImg = loadImage("bg.jpg");
  }else{
  backgroundImg = loadImage("bg2.jpg");
  }
}