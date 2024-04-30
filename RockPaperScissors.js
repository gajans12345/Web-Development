let humanScore;
let computerScore;

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    let move;
    switch (randomNumber) {
        case 1:
            move = "ROCK";
            break;
        case 2:
            move = "PAPER";
            break;
        case 3:
            move = "SCISSORS";
            break;
    }
    return move;
}
function getHumanChoice(){
    const userInput = prompt("Enter your choice in all CAPS, ROCK, PAPER OR SCISSORS: ");
    return userInput;
}

function playRound(){
    console.log("Welcome to Rock Paper Scissors");
    let human = getHumanChoice();
    let comp = getComputerChoice();
    if (human=="ROCK"){
        if(comp=="PAPER"){
            console.log("You lost the round")
            computerScore+=1;
        }
        else if(comp=="SCISSORS"){
            console.log("You won the round")
            humanScore+=1
        }
        else{
            console.log("This round is a tie")
        }  
    }

    else if(human=="PAPER"){
        if(comp=="PAPER"){
            console.log("This round is a tie")
        }
        else if(comp=="SCISSORS"){
            
            console.log("You lost the round")
            computerScore+=1;
        }
        else{
            console.log("You won the round")
            humanScore+=1
           
        }  

    }
    else{
        if(comp=="PAPER"){
            console.log("You won the round")
            humanScore+=1
        }
        else if(comp=="SCISSORS"){
            
            console.log("This is a tie")
        }
        else{
            console.log("You lost the round")
            computerScore+=1
           
        }  

    }
}

for(let i = 0; i < 5; i ++){
    playRound();
}
console.log("You score is " + humanScore+" and the computer score is " + computerScore);
if(humanScore>computerScore){
    console.log("You win");
}
else{
    console.log("You lose");
}



