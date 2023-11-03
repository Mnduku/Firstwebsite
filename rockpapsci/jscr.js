window.onload=function(){
let score1 = 0;
let score2 = 0;
const b1 = document.querySelector('#B2')
const b2 = document.querySelector('#B3')
const b3 = document.querySelector('#B4')
const a1 = document.querySelector('#res')
const a2 = document.querySelector('#sco')
const a3 = document.querySelector('#end')

a2.textContent = 'Human: ' + score1 + ' Computer: ' + score2;
b1.addEventListener('click', function (e) {
    a1.textContent = playRound("rock", getComputerChoice())
    a2.textContent = 'Human: ' + score1 + ' Computer: ' + score2;
    checkscore();
});

b2.addEventListener('click', function (e) {
    a1.textContent = playRound("paper", getComputerChoice())
    a2.textContent = 'Human: ' + score1 + ' Computer: ' + score2;
    checkscore();
});

b3.addEventListener('click', function (e) {
    a1.textContent = playRound("scissors", getComputerChoice())
    a2.textContent = 'Human: ' + score1 + ' Computer: ' + score2;
    checkscore();
});

function checkscore(){
    if(score1 ==5 || score2 == 5){
        a3.textContent = "Game is over !!!!";

    }
}


function playRound(playerSelection, computerSelection) {
    switch(playerSelection){
        case "rock":
            switch(computerSelection){
                case "rock":
                    return("Rock vs rock is a tie!")
                case "paper":
                    score2 =  score2 + 1
                    return("Rock loses to paper!")
                case "scissors":
                    score1 = score1 + 1
                    return("Rock smashes scissors!")
            }
        break
        case "scissors":
            switch(computerSelection){
                case "rock":
                    score2++
                    return("Scissors get smashed by rock!")
                case "paper":
                    score1++
                    return("Scissors cut paper!")
                case "scissors":
                    return("Scissors vs Scissors is a tie!")
            }
        break
        case "paper":
            switch(computerSelection){
                case "rock":
                    score1++
                    return("Paper smothers rock!")
                case "paper":
                    return("Paper vs paper is a tie!")
                case "scissors":
                    score2++
                    return("Paper gets cut by scissors!")
            }
        break
        default: return ("sjsjsjsjsss")
    }
  }

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    switch(choice){
        case 0: return("rock")
        case 1: return( "paper")
        case 2: return("scissors")
    }
}

function getpchoice(){
    let choice = parseInt(prompt("Enter 1 for rock, 2 for scissors, and 3 for paper"))
    let change = "empty"
    switch(choice){
        case 0: change = "rock"
        break
        case 1: change = "paper"
        break
        case 2: change = "scissors"
        break
    }
    return change;
}

function game(){
    let timer = 0
    while(timer < 5){
        let ps = getpchoice();
        let cs = getComputerChoice();
        console.log(playRound(ps,cs))
        timer++
    }
    if(score1 > score2) console.log("PLAYER WON")
    if(score1 < score2) console.log("COMPUTER WON")
    if(score1 == score2) console.log("TIE")
    console.log(score1)
}
}
