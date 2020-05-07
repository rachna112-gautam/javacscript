let myValidation = function(){
    document.getElementById('myinput').value;

    if(isNaN(value) || value < 1 || value > 20)
    {
        console.log("not a valid input");
    }
    else{
        console.log("this input is ok");
    }
}
document.querySelector('.myform').addEventListener('submit',(event) => {
   event.preventDefault();
    console.log(event.target.Fname.value);
console.log(event.target.Lname.value);
event.target.Fname.value ='';
event.target.Lname.value = '';
})
