class Particles{

    constructor(x,y){
    
        var options = {
            isStatic: false
    
        }
    
        this.body = Bodies.circle(x,y,10,options)
        this.x = x
        this.y = y
        this.r = 10
        this.color = color(random(0,255),random(0,255),random(0,255))
        World.add(myworld, this.body)

    }
    
    display(){
        var pos = this.body.position
        push();
        ellipseMode(RADIUS)
        fill(this.color)
        ellipse(pos.x, pos.y, this.r, this.r)
        pop();
    }
    
    
    
    }