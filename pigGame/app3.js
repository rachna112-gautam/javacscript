var scores,currentScore,activePlayer,gameOn;

init();

var lastDiceScore;
document.querySelector('.btn-roll').addEventListener('click', function(){
   if(gameOn){
    var dice = Math.floor(Math.random()*6)+1;
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-'+dice+'.png';
     
     if(lastDiceScore === 6 && dice === 6){
        document.querySelector('#current-' + activePlayer).textContent = 0;
        document.getElementById('score-' + activePlayer).textContent = 0;
        // scores[activePlayer] = 0;
          nextPlayer();
     }
    else if(dice!==1)
    {
        currentScore += dice;
        document.querySelector('#current-'+activePlayer).textContent = currentScore;
        
    }
    else{
        nextPlayer();
    }
    lastDiceScore = dice;
}
});
function nextPlayer() {
    activePlayer==0 ? activePlayer = 1 : activePlayer = 0;
    currentScore = 0;
  
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');

    document.querySelector('.player-1-panel').classList.toggle('active');
  
    document.querySelector('.dice').style.display = 'block';
}

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gameOn){
        scores[activePlayer] += currentScore;
        
        document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
        if(scores[activePlayer] >=100)
        {    
            document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gameOn = false;
        }
        else
        {
            nextPlayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click',init);

function init() {
      currentScore = 0;
      gameOn = true;
      scores = [0,0];
      activePlayer = 0;
      lastDiceScore = 0;

      document.querySelector('.dice').style.display = 'none';
    
      document.getElementById('score-0').textContent = '0';
      document.getElementById('score-1').textContent = '0';
      document.getElementById('current-0').textContent = '0';
      document.getElementById('current-1').textContent = '0';
      document.getElementById('name-0').textContent = 'Player 1';
      document.getElementById('name-1').textContent = 'Player 2';
      document.querySelector('.player-0-panel').classList.remove('winner');
      document.querySelector('.player-1-panel').classList.remove('winner');
      document.querySelector('.player-0-panel').classList.remove('active');
      document.querySelector('.player-1-panel').classList.remove('active');
      document.querySelector('.player-0-panel').classList.add('active');
}