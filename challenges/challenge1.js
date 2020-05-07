/*
var johnScore = (89 + 120 + 103)/3;
var mikeScore = (116 + 94 + 123)/3;
console.log(johnScore , mikeScore);
if(johnScore > mikeScore)
{
    console.log('john\'s team is the winner with a score of ' + johnScore + ' points');
}
else if(johnScore < mikeScore)
{
    console.log('mike\'s team is the winner with a score of ' + mikeScore + ' points');
}
else{
    console.log('It\'s a draw');
}
*/

//challenge2
// var bill = [124,48,268];
// var tip = [0,0,0];
// for(i=0;i<bill.length;i++)
// {
//     if(bill[i] < 50)
//      {
//          tip[i] = bill[i]*0.2;
//          bill[i]+=tip[i];
//      }
//      else if(bill[i]>50 && bill[i]<200)
//      {
//          tip[i] = bill[i]*0.15;
//          bill[i]+=tip[i];
//      }
//      else{
//          tip[i] = bill[i]*0.10;
//          bill[i]+=tip[i];
//      }
// }
// function tip(bill) {
//     var per;
//     if(bill<50)
//     per = 0.2;
//     else if(bill >50 && bill < 200)
//     per = 0.15;
//     else 
//     per = 0.10;
// return per * bill;
    
// }
// var tip = [tip(bill[0]),tip(bill[1]),tip(bill[2])];
// console.log(tip);
// console.log(bill);


// object
// var obj = new Object();
// obj.firstName = 'john';
// obj.lastName = 'miller';
// obj.age = 23;
// console.log(obj);

//challenge3
var john = {
    fullName : 'john Doe',
    mass  : 58,
    height : 1.5,
    bmiCalc : function()
    {
       this.BMI = this.mass/(this.height)*(this.height); 
    }
}
john.bmiCalc();
var mark = {
    fullName : 'mark steve',
    mass  : 60,
    height : 1.6,
    bmiCalc : function()
    {
       this.BMI = this.mass/ (this.height)*(this.height); 
    }
}
mark.bmiCalc();
console.log(john,mark);
if(john.BMI > mark.BMI)
{
    console.log(john.fullName + ' has highest bmi ' + john.BMI);
}
else if(john.BMI < mark.BMI)
{
    console.log(mark.fullName + ' has highest bmi ' + mark.BMI);
}
else
{
    console.log('Both have same BMI');
}

