class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 1.2,
            length : 100
        }
        this.Chain = Constraint.create(options);
        World.add(world, this.Chain);

    }

    fly(){
        this.Chain.bodyA = null;
    }

    display(){
        if(this.Chain.bodyA != null){
            var pointA = this.Chain.bodyA.position;
            var pointB = this.Chain.pointB;

            strokeWeight(5);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}