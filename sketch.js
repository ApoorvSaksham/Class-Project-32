const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;

var bg = "sunrise.png";

function preload() {
    getBackgroundImg();
    
}

function setup(){
     createCanvas(1520,740);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
        background(backgroundImg);

    Engine.update(engine);

 

}

async function getBackgroundImg(){

var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
var responseJSON = await response.json();

console.log(responseJSON);

var datetime = responseJSON.datetime;
var hour = datetime.slice(11,13);

    

    
    if(hour>=6 && hour<=17 ){
        bg = "sunrise.jpg";
    }
    else if(hour>17 && hour<=19)
    {
        bg="sunset.png"
    }
    else{
       bg = "night.jpg"
    }
    
    backgroundImg = loadImage(bg);
   
}
