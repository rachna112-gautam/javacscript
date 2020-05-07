//console.log( this );

var object = {
    prop: this,
    embed:
    {
        method: function(){ return this; }
    }
};

var array = [
    this,//points to the window object
    function(){ return this; }
];

function global(){
    // console.log( "from global" , this)
    // function sub(){
    //     console.log("from sub",this);
    // }
    // sub();
    return this;
}

// Normal invocation
global();
object.embed.method();
array[1]();

// Assign context
global.call( object );
object.embed.method.call( object );
array[1].call( object );

// New context add a new this context(blank object)
new global();
new object.embed.method( object );
new array[1]();