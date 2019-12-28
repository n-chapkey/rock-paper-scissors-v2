let playRound = (player, computer) => {
    let result = "";
    let winner = "";
    let loser = "";

    player = player.toLowerCase();
    computer = computer.toLowerCase();

    if(player == computer){
        return "It's a draw! You both played " + player +".";
    }else{
        if(player == "rock" && computer == "scissors"){
            result = "win";
            winner = player;
            loser = computer;
        }else if(player == "rock" && computer == "paper"){
            result = "lose";
            winner = computer;
            loser = player;
        }else if(player == "scissors" && computer == "rock"){
            result = "lose";
            winner = computer;
            loser = player;
        }else if(player == "scissors" && computer == "paper"){
            result = "win";
            winner = player;
            loser = computer;
        }else if(player == "paper" && computer == "rock"){
            result = "win";
            winner = player;
            loser = computer;
        }else if (player == "paper" && computer == "scissors") {
            result = "win";
            winner = player;
            loser = computer;
        }else{
            return "Error in input";
        }
    }
    
    return "You " + result + "! " + winner + " beats " + loser;
}

let computerPlay = () => {
    let move = Math.floor(Math.random() * 3);

    switch(move){
        case 0:
            return "rock";
        case 1:
            return "scissors";
        case 2:
            return "paper";
    }
}

const game = () =>{
    let playerChoice = "";
    let computerChoice = "";
    let roundResult = "";
    let playerScore = 0;
    let computerScore = 0;
    for(i=0;i<5;i++){
        
        playerChoice = window.prompt("Enter your move for round " + (i+1));
        computerChoice = computerPlay();
        roundResult = playRound(playerChoice, computerChoice);


        if(roundResult.indexOf("win")>-1){
            playerScore++;
        }else if(roundResult.indexOf("lose")>-1){
            computerScore++;
        }

        console.log("\nRound: " + (i+1));
        console.log("Computer's move is " + computerChoice);
        console.log(roundResult);
        console.log("The score is " + playerScore + "-" + computerScore);
        
    }

    if(playerScore>computerScore){
        console.log("\nYou won the game! With a final score of " 
        + playerScore + "-" + computerScore);
    }else if(playerScore<computerScore){
        console.log("\nYou lose the game! With a final score of " 
        + playerScore + "-" + computerScore);
    }else{
        console.log("\nThe game ends in a draw! With a final score of " 
        + playerScore + "-" + computerScore);
    }

}

game();

