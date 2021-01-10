class PaperBall{
    constructor(x,y,radius){
        
        var options={
            restitution:0.3
        }
        
        this.body = Bodies.circle(x,y,radius,options)
        this.image = loadImage("paper.png")
        World.add(world,this.body)
        this.radius = radius
    }
    display(){
      

        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.radius+40,this.radius+40)
        
    }

}