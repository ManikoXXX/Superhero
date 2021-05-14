const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var hero;
var monster;
var BG_img;
var font;
var ground, box, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16;

var gameState = "start";

function preload() {
    BG_img = loadImage("GamingBackground.png");
    font = loadFont('Jacksilver.ttf');
}

function setup() {
    createCanvas(3000, windowHeight);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    ground = new Ground(100, 740, 5000, 50);

    hero = new Hero(500, 500, 550, 220);

    monster = new Monster(2500, 525, 500, 500);

    chain = new Chain(hero.body, { x: 500, y: 500 });

    /*hero = createSprite(500,500,10,10);
    hero.addAnimation("idling", hero_idle);
    hero.scale = 0.2;*/

    box = new Box(1200, 10, 70, 70);
    box2 = new Box(1200, 10, 70, 70);
    box3 = new Box(1200, 10, 70, 70);
    box4 = new Box(1200, 10, 70, 70);
    box5 = new Box(1200, 10, 70, 70);
    box6 = new Box(1200, 10, 70, 70);
    box7 = new Box(1300, 10, 70, 70);
    box8 = new Box(1300, 10, 70, 70);
    box9 = new Box(1300, 10, 70, 70);
    box10 = new Box(1400, 10, 70, 70);
    box11 = new Box(1400, 10, 70, 70);
    box12 = new Box(1400, 10, 70, 70);
    box13 = new Box(1400, 10, 70, 70);
    box14 = new Box(1400, 10, 70, 70);
    box15 = new Box(1400, 10, 70, 70);
    box16 = new Box(1400, 10, 70, 70);
    box17 = new Box(1500, 10, 70, 70);
    box18 = new Box(1500, 10, 70, 70);
    box19 = new Box(1500, 10, 70, 70);
    box20 = new Box(1500, 10, 70, 70);
    box21 = new Box(1600, 10, 70, 70);
    box22 = new Box(1600, 10, 70, 70);
    box23 = new Box(1600, 10, 70, 70);
    box24 = new Box(1600, 10, 70, 70);
    box25 = new Box(1600, 10, 70, 70);
    box26 = new Box(1600, 10, 70, 70);
    box27 = new Box(1600, 10, 70, 70);
    box28 = new Box(1600, 10, 70, 70);
    box29 = new Box(1600, 10, 70, 70);
    box30 = new Box(1600, 10, 70, 70);
}

function draw() {
    background(BG_img);

    Engine.update(engine);

    strokeWeight(6);
    stroke("white");
    textSize(55);
    fill(148, 64, 255);
    textFont(font);
    text("Drag The Superhero And Release It, To Launch It Towards The Monster", 25, 100);

    box.display();

    box2.display();

    box3.display();

    box4.display();

    box5.display();

    box6.display();

    box7.display();

    box8.display();

    box9.display();

    box10.display();

    box11.display();

    box12.display();

    box13.display();

    box14.display();

    box15.display();

    box16.display();

    box17.display();

    box18.display();

    box19.display();

    box20.display();

    box21.display();

    box22.display();

    box23.display();

    box24.display();

    box25.display();

    box26.display();

    box27.display();

    box28.display();

    box29.display();

    box30.display();

    hero.display();

    monster.display();

    ground.display();

    collision(hero, monster);
}

function mouseDragged() {
    if (gameState === "start") {
        Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY });
    }
}

function mouseReleased() {
    chain.fly();
    gameState = "play";
}

function collision(a, b) {
    if (a.body.position.x - b.body.position.x <= a.width / 2 + b.width / 2
        && b.body.position.x - a.body.position.x <= a.width / 2 + b.width /
        2 && a.body.position.y - b.body.position.y <= a.height / 2 + b.height / 2
        && b.body.position.y - a.body.position.y <= a.height / 2 + b.height / 2) {

        Matter.Body.setStatic(b.body, false);
    }
}