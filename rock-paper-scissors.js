// console.log('hi');
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
      if(userInput === 'bomb' || userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    }
    else {
      return 'error'
    }
  }
  
  function getComputerChoice (){
   let randomNumber= Math.floor(Math.random()*2);
   switch (randomNumber){
    case 0: return 'rock';
      break;
    case 1: return 'paper';
      break;
    case 2: return 'scissors'
      break;
  }
  }
  // console.log(getComputerChoice())
  
  function determineWinner( userChoice, computerChoice) {
      if(userChoice === 'bomb') {
      return 'The user won';
    }
    if(userChoice === computerChoice) {
      return 'The game is a tie';
    }
    if(userChoice === 'rock') {
      if(computerChoice === 'paper'){
        return 'The computer won'
      }
      else {
        return 'The user won'
      }
    }
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
          return 'The computer won';
      } else {
          return 'The user won';
      }
    }
    if(userChoice === 'scissors'){
        if (computerChoice === 'rock') {
          return 'The computer won';
      } else {
          return 'The user won';
      }
    }
  }
  // console.log(determineWinner('scissors', 'paper'));
  function playGame(){
    let userChoice = getUserChoice('bomb');
    console.log(userChoice);
    let computerChoice = getComputerChoice();
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  }
  playGame();