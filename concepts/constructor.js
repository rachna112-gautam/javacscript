function Apple( x, y, color, score )
{   
    this.x = x;
    this.y = y;
 this.color = color;
    this.score = score;
}



var apple1 = new Apple( 10, 20, "red", 200 );
var apple2 = new Apple( 100, 200, "green", 50 );
var apple3 = new Apple( 20, 200, "pink", 10 );
//prototype object define the shared object,
// Apple.prototype = {
//     eat(){ return this },
//     throw()
// }
//object of Apple get automatically linked with prototype of Apple


