class paper
{
     constructor(x,y,r){
         var options={
          restitution : 0.1,
          density : 1,
          friction : 0.1
         }
         this.x = x;
         this.y = y;
         this.r = r;

         this.image = loadImage("paper.png");
         this.body = Bodies.circle(this.x, this.y, this.r, options)

         World.add(world,this.body)
     }
    display(){
        var paperPos = this.body.position 

        push()
        translate(paperPos.x,paperPos.y)
        imageMode(CENTER)
        image(this.image,0,0,this.r,this.r)
        pop();
    }

}
   
