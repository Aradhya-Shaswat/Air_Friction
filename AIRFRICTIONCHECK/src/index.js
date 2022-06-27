const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
let engine;
let world;

/*  Naming Global variables as Without it i will spend a lot of time just figuring it out so :)  */
var body1, body2, baseG;


function setup() {
    createCanvas(1856,1009);
    engine = Engine.create();
    world = engine.world;
    frameRate(144);

    baseG = new Base(960,1009,2000,10)

    body1 = new BodyOfObjs(960,0,60,60);
    body2 = new BodyOfObjs2(860,0,30,60);
}  


function draw() {
    background('#000000')
    text(mouseX + "," + mouseY, mouseX, mouseY)

    body1.show();
    body2.show();  
    // baseG.show();

    if (keyDown("space")) {
        location.reload()
      }

    Engine.update(engine);
}