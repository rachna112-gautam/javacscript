/*
function Apple( x, y, color, score )
{   
    this.x = x;
    this.y = y;
 this.color = color;
    this.score = score;
}*/
var Apple = function(x,y,color,score){
    this.x = x;
    this.y = y;
 this.color = color;
    this.score = score;
}
Apple.prototype.calculatePrice = function(){
    console.log(this.x * this.y);
}
Apple.prototype.size = 'medium'

var apple1 = new Apple( 10, 20, "red", 200 );
apple1.calculatePrice();
var apple2 = new Apple( 100, 200, "green", 50 );
apple2.calculatePrice();

var apple3 = new Apple( 20, 200, "yellow", 10 );
apple3.calculatePrice();
console.log(apple1.size);
console.log(apple2.size);
console.log(apple3.size);
//prototype object define the shared object,
// Apple.prototype = {
//     eat(){ return this },
//     throw()
// }
//object of Apple get automatically linked with prototype of Apple


