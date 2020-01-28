// var p = document.createElement('p1');
// var myTag = document.createTextNode('Enter Your Todo: ');
// p.appendChild(myTag);
// document.querySelector('h1').appendChild(myTag);
// let val = 5;
// while( val > 0)
// {
//     console.log(val);
//     val--;
// }
var ul = document.getElementById('list');
var li;
var addButton = document.getElementById('add');
addButton.addEventListener('click',addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click',removeItem);
function addItem(){
    var input = document.getElementById('input');
    var item = input.value;
    ul = document.getElementById('list');
    var textNode = document.createTextNode(item);
    
    if(item == ''){
        return false;
     }
    else{
        li = document.createElement('li');
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id','check');

        var label = document.createElement('label');
        label.setAttribute('for','item');

        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textNode);
        li.appendChild(label);
        ul.insertBefore(l1,ul.childNodes[0]);
        li.className = 'visual';

        setTimeout(() =>{
            li.className = 'visual'; 
            
        },2);
    }

}