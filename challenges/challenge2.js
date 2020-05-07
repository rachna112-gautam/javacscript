(function () {
    function Question(quest, options , correctAns){
    this.quest = quest;
    this.options = options;
    this.correctAns = correctAns;
    
}

Question.prototype.displayQuestion = function() {
    console.log(this.quest);

    for(var i=0;i<this.options.length;i++){
        console.log(i + ':' + this.options[i]);
    }
}
Question.prototype.correctAnswer = function(x, callback) {
    var sc;
    console.log(this.correctAns);
    if(this.correctAns == x)
     {  console.log('correct answer');
       sc = callback(true);
       
     }
    else{
    console.log('Wrong answer. Try Again :)');
   sc =  callback(false);
    }
    this.displayScore(sc);
}

Question.prototype.displayScore  = function(sc) {
    console.log('your score is '+ sc);
}

var q1 = new Question('Is js coolest of programming language in the world?',['yes' , 'no'],0);
var q2 = new Question('what is the name of captain america?',['Tony stark' , 'Steve'],1);
var q3 = new Question('which one is my fav avenger?',['Hulk' , 'Iron man','Thor'],2);


function score() {
    var sc =0;
    return function(correct){
        if(correct)
        {
            sc++;
        }
           return sc;
    }
}


var keepscore = score();

var questions = [q1, q2, q3];
function nextQ(){

var a = Math.floor(Math.random() * questions.length);
questions[a].displayQuestion();


var ans = prompt('Enter your answer (please type the option number)');


// console.log('Your score '+ score + ' out of' + questions.length);
if(ans !== 'exit'){
    questions[a].correctAnswer(parseInt(ans),keepscore);
nextQ();
}
}
nextQ();

})();