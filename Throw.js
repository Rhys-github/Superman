class Throw{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.01,
            lenght:10
        }
        this.pointB=pointB;
        this.throw=Constraint.create(options);
        World.add(world,this.throw)
    }
    fly(){
        this.throw.bodyA=null;
    }
    Launch(bodyA){
        this.throw.bodyA=bodyA
    }
    display(){
        push();
        translate(this.bodyA.position.x,this.body.position.y);
        ImageMode(CENTER)
        image(this.image,0,0,this.width,this.height);
        pop();

    }
}