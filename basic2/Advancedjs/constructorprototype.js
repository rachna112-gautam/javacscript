function Apple(color,weight)
{   this.color = color,
    this.weight = weight
}
    
Apple. prototype = {
    eat : function(){ return this },
       
    throw : function(){ return "in throw" }
            
};
//prototype object attached to the collable objects
var apple1 = new Apple("red",20);
var apple2 = new Apple("orange",25);
var apple3 = new Apple("green",10);