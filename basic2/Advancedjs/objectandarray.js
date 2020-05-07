/*
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
    drive: function(){ return "dive"; }
};

var array = [ 
    "string",
    100,
    [ "embed", 200 ],
    { car: "ford" },
    function(){ return "dive"; }
];
*/
//create object
var personProto = {
    calcAge : function(){
        console.log(2020 - this.yearOfBirth);

    }
};
var john = Object.create(personProto);
john.name = 'john';
john.yearOfBirth = 1990;
john.job = 'pilot';

var jane = Object.create(personProto,
    {
    name : { value : 'jane'},
    yearOfBirth : { value  : '1992'},
    job : { value : 'designer'}
    }
);

