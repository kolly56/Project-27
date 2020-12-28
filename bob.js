class Bob
{
    constructor(x,y,r)
    {
        var options={
            isststic:false,
            restitution:1,
            density:0.5
        }

        this.r=r;
        this.body=Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);

    }
    display()
    {
        var pos=this.body.position;

        push();
        translate(pos.x, pos.y);
        ellipseMode(RADIUS);

        stroke("white")
        strokeWeight(4);

        fill("pink");
        ellipse(0,0,this.r,this.r);
        pop();






    }






























}