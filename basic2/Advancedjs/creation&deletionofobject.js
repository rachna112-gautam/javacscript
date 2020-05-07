var car = {
    make: "volvo",
    speed: 160,
    engine: {
        size: 2.0,
        make: "bmw",
        fuel: "petrol",
        pistons:[
            { maker: "BMW" },
            { maker: "BMW2" }
        ]
    },
    drive: function(){ return "drive"; }
};

var array = [ 
    "string",
    100,
    [ "embed", 200 ],
    { car: "ford" },
    function(){ return "drive"; }
];

console.log( car.make );

// Assignment

car.make = "Ford";
car.make += " Chevy";

car.speed += 50;
car.speed -= 10;
car.speed *= 2;
car.speed /= 2;
car.speed **= 2;
car.speed %= 33;

// Creation

car.model = "v60";
car.color = "red";

car.stop = function(){ return "stop"; };

// Delete


delete car.drive;