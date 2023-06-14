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
