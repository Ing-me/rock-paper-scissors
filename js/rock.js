//array of choices
const choices = ["rock", "paper", "scissors"];

//this is the function to sart the game
function play(){
    playRound();
}

function playRound(){

    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();

    console.log("player: " +playerSelection);
    console.log("computer: " +computerSelection);
    const winner = verifyWinner(playerSelection,computerSelection); 
    console.log(winner);
   
}
 // To verify the player choice
function getPlayerChoice(){
   let playerEntry = prompt("Enter rock or paper or scissors");
   playerEntry = playerEntry.trim();

   while(playerEntry.length === 0){
        playerEntry = prompt("Enter rock or paper or scissors");
   }

   playerEntry = playerEntry.toLowerCase();
   let verifyP = validateChoice(playerEntry);  

    while(verifyP === false){
        playerEntry = prompt("Enter the correct word: rock or paper or scissors");

        playerEntry = playerEntry.trim();
        playerEntry = playerEntry.toLowerCase();
        verifyP = validateChoice(playerEntry);
        
    } 
    
    return playerEntry;
  
}

//tTo verify the computer choice
function getComputerChoice(){  

    const random = Math.floor(Math.random() * choices.length);
    return(random, choices[random]);
    
}
//To verify the entry of the player
function validateChoice(ch){
    return choices.includes(ch);
}
 //To verify wich win
function verifyWinner(pc, cc){
    if(pc === cc){
        return "The game is hard";
    }
    else if((pc === "rock" && cc ==="scissors") ||
    (pc === "paper" && cc === "rock") ||
    (pc === "scissors" && cc === "paper")){
        return "Player won";
    }
    else{
        return "Computer won";
    }
}

play();

