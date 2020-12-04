class Paper{
    constructor(x,y,radius){
        var options ={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.5
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world, this.body);
    }
        display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill(255,0,253);
        ellipse(pos.x, pos.y, this.radius*2, this.radius*2);
        }
    }
