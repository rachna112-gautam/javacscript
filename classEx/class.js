class Car{
    constructor(brand){
      this.carname = brand;
    }
    getCarname(abc){
        return abc + " I got "+ this.carname;
    }
    static hello(){
        return "hello"
    }
}
mycar = new Car("lambergini");
// document.getElementById("demo").innerHTML = mycar.getCarname("Hey!");
document.getElementById("demo").innerHTML = Car.hello();
"use strict"
var x = 4.6;
document.getElementById("demo").innerHTML = x;