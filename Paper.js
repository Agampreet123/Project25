class Paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        
        
        this.radius = radius;
        this.x = x
        this.y = y
        this.image = loadImage("paper1.png");
        this.body = Bodies.circle(this.x,this.y,this.radius,options);
        
        World.add(world,this.body);
    }
   
    
    display(){
        
        var pos = this.body.position
        push()
        translate(pos.x,pos.y)
        
        fill(248, 24, 148);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius)
        pop()
    }

    
}
