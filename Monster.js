class Monster{
    constructor(x,y,width,height){
        var options = {
            density : 1,
            frictionAir : 0.01,
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Monster-01.png");
        this.Visiblity = 255;

        World.add(world, this.body);

    }
 
    display(){
        if(this.body.speed < 3){
            var pos = this.body.position;

            imageMode(CENTER);
            image(this.image,pos.x,pos.y,this.width,this.height);
        }
        else{
            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity - 5;
            tint(255,this.Visiblity);
            image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
            pop();
        }
        
        
    }
}