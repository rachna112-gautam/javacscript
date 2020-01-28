const myEle = document.querySelectorAll('p')
myEle.forEach((p) => 
    p.textContent = 'I Am changed using JS Loop'
)
console.log(document.getElementById('demo'));
document.getElementById('demo').innerHTML = 'i got changed'

const myElement = document.querySelector('#demo')
console.log(myElement)
document.querySelector('button').addEventListener('click',(event) => {
    event.target.textContent = 'I was clicked';

})
document.querySelector('#myinput').addEventListener('input',(event) => {
    console.log(event.target.value);
    
})