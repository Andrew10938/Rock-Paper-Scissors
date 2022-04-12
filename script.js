// Starting Variables
//Storing HTMl elements a variable for easy access
let pScoreboard = document.querySelector('.p-count');
let cScoreboard = document.querySelector('.c-count');
let roundResult = document.querySelector('.result');
let computerChoiceSpan = document.querySelector('.computerChoice');
let userChoiceSpan = document.querySelector('.userChoice');
let winnerPannel = document.querySelector('.winner');

//setting score variables for player & computer to track score
let playerScore = 0;
let computerScore = 0;
//intializing Global variables to store user and computer selections
let computerChoice;
let playerChoice;
const gameOptions = ["rock", "paper", "scissor"];
//function to randomly generate a choice for the computer, uses a random number 1-3 to store selections)

function computerChoose() {
  const randomNum = Math.floor(Math.random() * 3);
    computerChoice = gameOptions[randomNum];
    computerChoiceSpan.innerHTML = computerChoice;
}

function userChoice(choice) {
    playerChoice = gameOptions[choice];
    userChoiceSpan.innerHTML = playerChoice;
    computerChoose();
    game(playerChoice,computerChoice);
}

function game(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        won("tie");
        return;  // nothing more to check when it's a tie
    }

    if (playerChoice == "rock" && computerChoice == "paper")
        won("computer");
    else if (playerChoice == "rock" && computerChoice == "scissor")
        won("player");
    else if (playerChoice == "paper" && computerChoice == "rock")
        won("player");
    else if (playerChoice == "paper" && computerChoice == "scissor")
        won("computer");
    else if (playerChoice == "scissor" && computerChoice == "rock")
        won("computer");
    else if (playerChoice == "scissor" && computerChoice == "paper")
        won("player");
    else
        alert("Wrong inputs")
}

function won(winner) {
    if (winner == "player") {
        roundResult.innerHTML = "You have won against the COMPUTER!!!!";
        playerScore = playerScore + 1;
        pScoreboard.innerHTML = playerScore;
        winnerPannel.src = "https://t3.ftcdn.net/jpg/03/12/81/58/360_F_312815843_CdVm05kiBenU3YmChP1KRIzcblRgTQFV.jpg";
    }
    else if (winner == "computer") {
        roundResult.innerHTML = "You Suck";
        computerScore = computerScore + 1;
        cScoreboard.innerHTML = computerScore;
        winnerPannel.src = "https://res.cloudinary.com/teepublic/image/private/s--72nU-rt1--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_000000,e_outline:48/co_000000,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1556103623/production/designs/4706622_0.jpg";
    }
    else {
        roundResult.innerHTML = "ITS A TIE";
        winnerPannel.src = "https://media.istockphoto.com/photos/blue-silk-tie-on-white-background-picture-id1146412896?k=20&m=1146412896&s=612x612&w=0&h=t4s6slrwALa3RMEK3AcxpzqmOKqplG8Xvb0epWTOcpQ=";
    }
    winnerPannel.style.display = "block";
}

function resetGame() {
    roundResult.innerHTML = "";
    playerScore = 0;
    pScoreboard.innerHTML = playerScore;
    computerScore = 0;
    cScoreboard.innerHTML = computerScore;
    userChoiceSpan.innerHTML = "";
    computerChoiceSpan.innerHTML = "";
    winnerPannel.style.display = "none";
}
