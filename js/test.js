const choices = ["rock", "paper", "scissors"];
let winners = [];

function resetGame(){
    winners = [];
    document.querySelector('#cchoice').textContent =  'Computer choice:';
    document.querySelector('#pchoice').textContent = 'Player choice:';
    document.querySelector('#cscore').textContent = 'Player score: 0';
    document.querySelector('#pscore').textContent = 'Player score: 0';
    document.querySelector('#tie').textContent = 'Score: 0';
    document.querySelector('#result').textContent = 'Winner:';
    document.querySelector('#resetGame').style.display = "none";
    document.querySelector('#win').textContent = '';
}

// start the game
function startGame(){

    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if(button.id){
                playRound(button.id);
            }
        });
    });
}

function playRound(playerChoice){
    let wins = checkwins();
    if(wins >= 5){
    return;
    }
    const comp = getComputerChoice(); 
    const win = verifyWinner(playerChoice, comp);

    winners.push(win);
    tallWins();
    displayRound(playerChoice, comp, win);
    wins = checkwins();
    if(wins == 5){

        document.querySelector('#result').textContent = `${win}`;
        displayEnd();
    }

}

function displayEnd(){
    let playerWins = winners.filter((item) => item == "player").length;
    if(playerWins == 5){
        document.querySelector('#win').textContent = 'Congratulation! you won';
        document.querySelector('#resetGame').style.display = "flex";
        document.querySelector('#resetGame').style.textAlign = "center";
    }
    else{
        document.querySelector('#win').textContent = 'Sorry! the computer won';
        document.querySelector('#resetGame').style.display = "flex";
        document.querySelector('#resetGame').style.textAlign = "center";
    }
   
}

function displayRound(p, c, w){
  
    document.querySelector("#pchoice").textContent = `Player choice: ${p}`;
    document.querySelector('#cchoice').textContent = `Computer choice: ${c}`;
    document.querySelector('#result').textContent = `Round winner: ${w}`;
    
    displayRoundWinner(w);

}

function displayRoundWinner(winner){
    if (winner == "player") {
        document.querySelector('#result').textContent = 'You won';
    }
    else if(winner == "computer"){
        document.querySelector('#result').textContent = 'Computer won';
    }
    else{
        document.querySelector('#result').textContent = 'The game is tied!';
    }
}

  

function getComputerChoice(){  

const random = Math.floor(Math.random() * choices.length);
return(random, choices[random]);

}

function checkwins(){
    const pwinCount = winners.filter((item) => item === "player").length;
    const cwinCount = winners.filter((item) => item === "computer").length;
    return Math.max(pwinCount, cwinCount);
}
function tallWins(){
    const pwinCount = winners.filter((item) => item === "player").length;
    const cwinCount = winners.filter((item) => item === "computer").length;
    const tieCount = winners.filter((item) => item === "tie").length;
    document.querySelector('#pscore').textContent = `Player score: ${pwinCount}`;
    document.querySelector('#cscore').textContent = `Computer score: ${cwinCount}`;
    document.querySelector('#tie').textContent = `Score: ${tieCount}`;
}

function verifyWinner(pc, cc){  
    if(pc === cc){
     return "tie";
    }
    else if((pc === "rock" && cc ==="scissors") ||
    (pc === "paper" && cc === "rock") ||
    (pc === "scissors" && cc === "paper")){
        return "player";
         
    }
    else{
       return "computer";
        
    }
  
}

function setWins(){
    const pwinCount = winners.filter((item) => item === "player").length;
    const cwinCount = winners.filter((item) => item === "computer").length;
    const tieCount = winners.filter((item) => item === "tie").length;
}


function myFunction(){
    document.querySelector('#resetGame').style.display = "none";
}

startGame();