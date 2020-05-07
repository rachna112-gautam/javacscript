/*
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
    
    function add(b)
    {   
        return a + b;
    }
    
    console.log(
        add(90),
        add(20)
    );
}
*/
//closures 
//inner fn has always access to variable and parameters of its outer fn, even after the outer fn has returned
/*
function retirementAge(country){
    return function(yob){
    if(country === 'US')
    {
      
           var a = 2020 - yob;
           console.log(65 - a + ' years left until retirement');
       
    }
    else if(country === 'iceland')
    {
        var a = 2020 - yob;
        console.log(67 - a + ' years left until retirement');
    }
}
}
retirementAge('US')(1990);
*/

//bind, call and apply method
var yrs = [1990,1998,2000,1996];
function arrayCalc(arr,fn){
    var arrRes = [];
    for(var i=0;i<arr.length;i++){
        arrRes.push(fn(arr[i]));
    }
return arrRes;
}

function calcAge(el){
    return 2020 - el;
}

function isFullAge(limit, el){
    return el>=limit;
}
 var ages = arrayCalc(yrs , calcAge);
 console.log(ages);
 var fullAges = arrayCalc(yrs , isFullAge.bind(this,20));
 console.log(fullAges);