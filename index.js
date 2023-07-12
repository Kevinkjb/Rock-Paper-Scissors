
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const wins = document.getElementById('wins');
const losses = document.getElementById('losses');
const ties = document.getElementById('ties');
const resetBtn = document.getElementById('reset-btn')
const displayScore = document.querySelector('.display-score')
const displayResult = document.querySelector('.display-result')
const championVersus = document.querySelector('.versus')


let score = JSON.parse(localStorage.getItem
('points'))|| {
    wins: 0,
    losses: 0,
    ties: 0
};

if(score){
    points = score
}

rock.addEventListener('click', function(){
    playerMove('rock')

});

paper.addEventListener('click', function(){
    playerMove('paper')
});

scissors.addEventListener('click', function(){
    playerMove('scissors')

});

function playerMove(champion){
    let randomNumber = Math.floor(Math.random() * 3);
    
    let player = ['rock', 'paper', 'scissors'];
    let computer = ['rock', 'paper', 'scissors'];
    let computerMove = computer[randomNumber]; 
    let result = ''

    if(champion === 'rock'){
        if('rock' === computerMove){
            result = 'draw';
            championVersus.innerHTML = `You: <img src="images/rock.png"> Comp: <img src="images/${computerMove}.png">`
            // console.log(player[0] + ' vs '+ computerMove);
            // console.log('draw');
        }
        else if('scissors' === computerMove){
            result = 'you win';
            championVersus.innerHTML = `You: <img src="images/rock.png"> Comp: <img src="images/${computerMove}.png">`
            // console.log(player[0] + ' vs '+ computerMove);
            // console.log('you win');
        } 
        else if('paper' === computerMove){
            result = 'you lose';
            championVersus.innerHTML = `You: <img src="images/rock.png"> Comp: <img src="images/${computerMove}.png">`
            // console.log(player[0] + ' vs '+ computerMove);
            // console.log('you lose');
        }
    }
    else if(champion === 'paper'){
        if(computerMove === 'paper' ){
            result = 'draw';
            championVersus.innerHTML = `You: <img src="images/paper.png"> Comp: <img src="images/${computerMove}.png">`
            // console.log(player[1] + ' vs '+ computerMove);
            // console.log('draw');
        } 
        else if(computerMove === 'rock'){
            championVersus.innerHTML = `You: <img src="images/paper.png"> Comp: <img src="images/${computerMove}.png">`
            result = 'you win'
            // console.log(player[1] + ' vs '+ computerMove);
            // console.log('you win');
        } 
        else if(computerMove === 'scissors'){
            result = 'you lose';
            championVersus.innerHTML = `You: <img src="images/paper.png"> Comp: <img src="images/${computerMove}.png">`
            // console.log(player[1] + ' vs '+ computerMove);
            // console.log('you lose');
        }
    }
    else if(champion === 'scissors'){
        if('scissors' === computerMove){
            result = 'draw';
            championVersus.innerHTML = `You: <img src="images/scissors.png"> Comp: <img src="images/${computerMove}.png">`
            // console.log(player[2] + ' vs '+ computerMove)
            // console.log('draw')
        } 
        else if('paper' === computerMove){
            result = 'you win';
            championVersus.innerHTML = `You: <img src="images/scissors.png"> Comp: <img src="images/${computerMove}.png">`
            // console.log(player[2] + ' vs '+ computerMove)
            // console.log('you win')
        } 
        else if('rock' === computerMove){
            result = 'you lose'
            championVersus.innerHTML = `You: <img src="images/scissors.png"> Comp: <img src="images/${computerMove}.png">`
            // console.log(player[2] + ' vs '+ computerMove)
            // console.log('you lose')
        }
    }

    if(result === 'you win'){
        points.wins += 1
    } else if(result === 'you lose'){
        points.losses += 1
    } else if(result === 'draw'){
        points.ties += 1
    }

    displayResult.innerHTML = `Results: ${result}`
    localStorage.setItem('points', JSON.stringify(points))
    updateScore()
}


function updateScore(){
    displayScore.innerHTML = `Wins: ${points.wins}, Losses: ${points.losses}, Ties: ${points.ties}`
}

resetBtn.addEventListener('click', function(){
    points.wins = 0,
    points.losses = 0
    points.ties = 0
    localStorage.removeItem('points')
    displayResult.innerHTML = ""
    championVersus.innerHTML = ""
    updateScore();
})

