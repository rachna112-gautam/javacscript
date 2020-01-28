var engine = {
    maker: "Ford",
    headGasket:{
        maker: "Golf",
        pots:[
            "piston1",
            "piston2"
        ]
    }
};


function runExpression()
{   
    var a = 10;
    
    function add()
    {   
        // Scoped engine
        // var engine = "New engine";
        // var engine = "new string"
        // console.log(engine);
        // Inferred globals
        console.log( engine, a );
        
        // Clobbering the global scope
        test = "new stirng";
        test2 = "new string 2";
        test3 = "new string 3";//creating window objectss
    }
    
    add();
}