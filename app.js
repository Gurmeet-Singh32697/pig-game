var scores, roundScore, activePlayer,gamePlaying;
function newGame(){
scores = [0,0];
roundScore = 0;
activePlayer = 0;
document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    gamePlaying = true;
    
}
newGame();



document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
          //1.random number
var  dice = Math.floor(Math.random()*6)+1;
    
    //dispaly the result
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';
    
    // update the round score if the dice is not 1
    if(dice!==1){
        //addscore
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
         
    }else {
        //nextplayer
        nextPlayer();
            }
    }
  
});
    
    document.querySelector('.btn-hold').addEventListener('click', function(){
        if(gamePlaying){
        //add current score to global score
        scores[activePlayer] += roundScore; 
        
        //update the ui
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        
        //check the winner
        if(scores[activePlayer] >=100){
            document.querySelector('#name-' + activePlayer).textContent = 'winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
             document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
            
        }else{
        
        //next player
        nextPlayer();
        }
        }
    });

function nextPlayer() {
    
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        document.getElementById('current-0').textContent = 0;
        document.getElementById('current-1').textContent = 0;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display = 'none';
}
document.querySelector('.btn-new').addEventListener('click',newGame);