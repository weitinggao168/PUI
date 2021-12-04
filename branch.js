function Branch(begin,end){
    this.begin = begin;
    this.end = end;
    this.age = 0;
    this.finished = false;
    this.jitter = function(){
        this.end.x += random(-1,1);
        this.end.y += random(-1,1);
    }
    this.show = function(){
        stroke(0, 240, 255);
        var b = p5.Vector.sub(this.end,this.begin);
        b.mult(this.age);
        var tempEnd = p5.Vector.add(this.begin,b);
        line(this.begin.x,this.begin.y,tempEnd.x,tempEnd.y)
    }
    this.branchA=function(){
        var dir = p5.Vector.sub(this.end,this.begin);
        dir.rotate(PI/6);
        dir.mult(0.67);
        var newEnd =p5.Vector.add(this.end,dir);
        
        var d = p5.Vector.dist(this.begin,this.end)
        var b = new Branch(this.end,newEnd);
        return b;
        
    }

  this.branchB=function(){
    var dir = p5.Vector.sub(this.end,this.begin);
    dir.rotate(-PI/4);
    dir.mult(0.67);
    var newEnd = p5.Vector.add(this.end,dir);
    var d = p5.Vector.dist(this.begin,this.end)
    var b = new Branch(this.end,newEnd);
    return b;
}
}
