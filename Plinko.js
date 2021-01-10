class Plink{

    constructor(x,y){
    
        var options = {
            isStatic: true
    
        }
    
        this.body = Bodies.circle(x,y,10,options)
        this.x = x
        this.y = y
        this.r = 10
        World.add(myworld, this.body)

    }
    
    display(){
    
        push();
        ellipseMode(RADIUS)
        fill("white")
        ellipse(this.x, this.y, this.r, this.r)
        pop();
    }
    
    
    
    }