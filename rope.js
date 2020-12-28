class Rope{
    constructor(body1,body2,offsetX){

        var options={
            bodyA:body1,
            bodyD:body2,
            pointB:{x:offsetX,y:0}
        }
        this.offsetX=offsetX;
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
}
display()
{
    var pointA=this.rope.bodyA.position;
    var pointB=this.rope.bodyB.position;
    push();
    strokeWeight(2);
    stroke("skyblue");
   line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y);
   pop();        

}
}