class Dustbin{
    constructor(x,y,width,height){
        this.body=Bodies.rectangle(x,y,width,height,{isStatic:true});
        this.width=width;
        
        this.height=height;
        World.add(world, this.body);
    
    this.image=loadImage("dustbingreen.png"); 
    
    }
    
    display(){
    var pos=this.body.position;
    imageMode(CENTER);
    fill (255);
    image(this.image,pos.x,pos.y,this.width,this.height);
    
    }
    
    
    
    
    
    
    }