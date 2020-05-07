/*
function makeCoffee( sugar, milk )
{
    var instructions = "Boil water,";
    
    instructions += " pour into cup,";
    
    instructions += " add coffee granules,";
    
    instructions += " add " + sugar + " spoons of sugar,";
    
    instructions += " add " + milk + "% milk.";
    
    return instructions;
}

console.log( makeCoffee( 2, 20 ) );
*/

//passing fn as arguments
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

function isFullAge(el){
    return el>=18;
}
 var ages = arrayCalc(yrs , calcAge);
 console.log(ages);
 var fullAges = arrayCalc(yrs , isFullAge);
 console.log(fullAges);

 //function returning function

 /*
 function interviewQuest(job){
     if(job === 'designer')
     {    //Anonymous fn 
         return function(name){
             console.log(name + ' can u you pls explain about ur design?');
         }
     }
    else{
        return function(name){
            console.log(name + 'what do you do?');
        }
    }

 }
//  var designerQuestion = interviewQuest('designer');
//  designerQuestion('jane');
 
interviewQuest('designer')('mike');
*/


//immediately invoked function expression (IIFE)

(function() {
    var score = Math.random() + 10;
    console.log(score >= 10);
})();

(function(goodluck) {
    var score = Math.random() + 10;
    console.log(score >= 5-goodluck);
})(5);

