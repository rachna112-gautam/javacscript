// var xhttp = new XMLHttpRequest();
// xhttp.open('GET','https://learnwebcode.github.io/json-example/animals-1.json');
// xhttp.onload = function() {
//  var data = xhttp.responseText;
//  console.log(data[0]);//takes as a text and need conversion into json
// var data = JSON.parse(xhttp.responseText);
// console.log(data[0]);
// };
// xhttp.send();
// AJAJ stands for Aysnchronous js and json(data farmat)
var pageCnt = 1;
var btn = document.getElementById('btn');
btn.addEventListener('click',function() {
    var xhttp = new XMLHttpRequest();
xhttp.open('GET','https://learnwebcode.github.io/json-example/animals-' + pageCnt + '.json');
xhttp.onload = function() {
    var data = JSON.parse(xhttp.responseText);
     renderHTML(data);
    };
    xhttp.send();
   pageCnt++;
});
var info =  document.getElementById('animal_info');
function renderHTML(ourData) {
   var htmlString = "";
   for(i=0 ; i < ourData.length; i++){
       htmlString += "<p>" + ourData[i].name + " is a "  + ourData[i].species
 + " likes to eat ";
    for(j = 0;j < ourData[i].foods.likes.length; j++)
    {   if(j == 0)
        htmlString  += ourData[i].foods.likes[j]+ " ";
        else
        htmlString += ourData[i].foods.likes[j] + " ";
    }
    htmlString += " and dislikes ";
    for(j = 0;j < ourData[i].foods.dislikes.length; j++)
    {   if(j == 0)
        htmlString  += ourData[i].foods.dislikes[j] + " ";
        else
        htmlString += ourData[i].foods.dislikes[j] + " ";
    }
    
}
   info.insertAdjacentHTML('beforeend',htmlString);
    
}