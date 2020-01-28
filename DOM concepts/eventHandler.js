var select = document.getElementsByName('Marvel')[0];
select.onclick = function( event ){
    console.log( event );
}
// select.addEventListener( 'click', function( event ){
//     console.log( 'clicked by add event listener');
// } );
function ClickCallback( event ){
    console.log( 'clicked by add event listener' );
}
select.addEventListener( 'click' , ClickCallback);
//select.removeEventListener( 'click' , symbolName);
//symbolName is a memory pointer and automatically referencing call back fn by jit compiler
select.removeEventListener('click', ClickCallback);
//all call back fn receive an event object automatically