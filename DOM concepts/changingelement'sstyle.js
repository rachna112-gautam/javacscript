var s = document.getElementById('style');
s.style.background = "blue";
s.style.color = "white";
s.style.width = "200px";
s.style.cssText = "background:blue; color:white; width:250px";
s.style.cssText += "height:100px";
//computed properties are the css propertiy that we applied to it and also the default properties as well.
// console.log(getComputedStyle( s ));
//!important is used to make particular styling more important as anywhere else
