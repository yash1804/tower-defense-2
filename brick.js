class Brick {
  constructor(x, y ,width, height) {
    this.visiblity = 255;
    var options = {
      isStatic: false
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display()
  { console.log(this.body.speed);
     if(this.body.speed <5){
      var angle = this.body.angle;
      var pos= this.body.position;
      push();
      translate(pos.x, pos.y);
     rotate(angle);
     rectMode(CENTER);
     fill("red");
     rect(0,0,this.width, this.height);
     this.visiblity = 255;
      pop();
     }
     else
     { World.remove(world, this.body);
       push();       
       this.visibility = this.visibility -1;
       pop();
     }
  }
} 