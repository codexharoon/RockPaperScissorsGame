let score = JSON.parse(localStorage.getItem('score'));

function printScore(){
    const scoreString = `Total Score: Win: ${score.wins}  Loses: ${score.loses}  Draw: ${score.Drwa}`;

    return scoreString;
}

function printDraw(){
    const drawString = `Game Draw!`;
    return drawString;
}

function printWin(){
    const winString = `You Win!`;
    return winString;
}

function printLose(){
    const loseString = `You Lose!`;
    return loseString;
}

function movesEmoji(ourMove,compMove){
    const s = ` You <img src="IMGs/${ourMove}-emoji.png" alt="" height="50px">
<img src="IMGs/${compMove}-emoji.png" alt="" height="50px">
Computer`;

    return s;
}

function resetScore(){
    score.wins = 0;
    score.loses = 0;
    score.Drwa = 0;

    localStorage.setItem('score',JSON.stringify(score));

    document.querySelector('.score').innerText = printScore();
}



function autoMove(){
    randNum = Math.random();
    let result = '';
        if(randNum >=0 && randNum < 1/3){
            result = 'rock'
        }
        else if(randNum >=1/3 && randNum < 2/3){
            result = 'paper'
        }
        else if(randNum >=2/3 && randNum < 1){
            result='scissors'
        }

        return result;
}

function playGame(move){
    if(move==='rock'){
        randNum = Math.random();
        if(randNum >=0 && randNum < 1/3){
            score.Drwa++;
            localStorage.setItem('score',JSON.stringify(score));

            document.querySelector('.game-result').innerText = printDraw();
            document.querySelector('.moves').innerHTML = movesEmoji('rock','rock');
            document.querySelector('.score').innerText = printScore();

        }
        else if(randNum >=1/3 && randNum < 2/3){
            score.loses++;
            localStorage.setItem('score',JSON.stringify(score));

            document.querySelector('.game-result').innerText = printLose();
            document.querySelector('.moves').innerHTML = movesEmoji('rock','paper');
            document.querySelector('.score').innerText = printScore();

        }
        else if(randNum >=2/3 && randNum < 1){
            score.wins++;
            localStorage.setItem('score',JSON.stringify(score));
  
            document.querySelector('.game-result').innerText = printWin();
            document.querySelector('.moves').innerHTML = movesEmoji('rock','scissors');
            document.querySelector('.score').innerText = printScore();

        }
    }
    else if(move==='paper'){
        randNum = Math.random();

        if(randNum >=0 && randNum < 1/3){
            score.wins++;
            localStorage.setItem('score',JSON.stringify(score));

            document.querySelector('.game-result').innerText = printWin();
            document.querySelector('.moves').innerHTML = movesEmoji('paper','rock');
            document.querySelector('.score').innerText = printScore();

        }
        else if(randNum >=1/3 && randNum < 2/3){
            score.Drwa++;
            localStorage.setItem('score',JSON.stringify(score));

            document.querySelector('.game-result').innerText = printDraw();
            document.querySelector('.moves').innerHTML = movesEmoji('paper','paper');
            document.querySelector('.score').innerText = printScore();

        }
        else if(randNum >=2/3 && randNum < 1){
            score.loses++;
            localStorage.setItem('score',JSON.stringify(score));

            document.querySelector('.game-result').innerText = printLose();
            document.querySelector('.moves').innerHTML = movesEmoji('paper','scissors');
            document.querySelector('.score').innerText = printScore();

        }
    }
    else if(move==='scissors'){
        randNum = Math.random();
        if(randNum >=0 && randNum < 1/3){
            score.loses++;
            localStorage.setItem('score',JSON.stringify(score));

            document.querySelector('.game-result').innerText = printLose();
            document.querySelector('.moves').innerHTML = movesEmoji('scissors','rock');
            document.querySelector('.score').innerText = printScore();

        }
        else if(randNum >=1/3 && randNum < 2/3){
            score.wins++;
            localStorage.setItem('score',JSON.stringify(score));

            document.querySelector('.game-result').innerText = printWin();
            document.querySelector('.moves').innerHTML = movesEmoji('scissors','paper');
            document.querySelector('.score').innerText = printScore();

        }
        else if(randNum >=2/3 && randNum < 1){
            score.Drwa++;
            localStorage.setItem('score',JSON.stringify(score));

            document.querySelector('.game-result').innerText = printDraw();
            document.querySelector('.moves').innerHTML = movesEmoji('scissors','scissors');
            document.querySelector('.score').innerText = printScore();

        }
    }
}


let isAutoPlay = false;
function autoPlay(){

    const autoPlayFun = function(){
        let result = autoMove();
        playGame(result);
    }

    
    if(!isAutoPlay){
        intervalId = setInterval(autoPlayFun,1000);
        isAutoPlay = true;
    }
    else{
        clearInterval(intervalId);
        isAutoPlay = false;
    }

}
