function name( fullname )
{    
    return fullname.firstname + fullname.lastname;
}

// Where there are objects...
var name1 = { firstname: "Lawrence", lastname: "Turton"  };

const name2 = { firstname: "John", lastname: "Doe"  };

console.log(
    name( name1 ),
    name( name2 )
);

// There are callable objects
function embed( run )
{
    return run();
}

var name3 = function() { return "John Lock"  };

const name4 = function() { return "Stephanie Lock" };

console.log(
    embed( name3 ),
    embed( name4 )
);