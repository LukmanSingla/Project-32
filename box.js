class Box{
    constructor(x,y,width,height,fill){
        var options={
            restitution:0.3,
            friction:1
        }
        this.body=Bodies.rectangle(x,y,width,height);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
        this.fill=fill;
    }
    display(){
       
        push();
        var pos = this.body.position;
        strokeWeight(2);
        translate(pos.x,pos.y);
        fill(this.fill);
        angleMode(RADIANS);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}