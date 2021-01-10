const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var myworld, myengine;

var ground,part;

var particles = []
var plinkos = []
var divisions = []

var divisionHeight = 300

function setup() {
  createCanvas(480,800);

myengine = Engine.create();
myworld = myengine.world;

ground = new Ground(width/2,height-10,width,20)

for (var k = 0; k<=width; k=k+80){
divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight))
}



for(var i = 75; i<300; i=i+200){
for (var j = 40;j<=width; j=j+50)
{
  plinkos.push(new Plink(j,i))
}
}

for(i = 175; i<400; i=i+200){
for (var j = 15;j<=width; j=j+50)
{
  plinkos.push(new Plink(j,i))

}
}




Engine.run(myengine);

}

function draw() {
  background("black");  

createParticles();

  ground.display();
 // divisions.display()
 for(var i =0; i<divisions.length; i++){
   divisions[i].display();
 }
  
 for(var i =0; i<plinkos.length; i++){
  plinkos[i].display();
}
for(var i =0; i<particles.length; i++){
  particles[i].display();
}

  
}

function createParticles(){
  if(frameCount%90===0){
    particles.push(new Particles(random(width/2-5,width/2+5),0))
    
   }



}