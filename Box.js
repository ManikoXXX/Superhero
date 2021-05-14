class Box{
  constructor(x, y, width, height, angle) {
      var options = {
        isStatic: false, 
        density: 0.001,
        friction: 2, 
        frictionAir: 0.0001, 
        frictionStatic: 10,  
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("Box.png");
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
}