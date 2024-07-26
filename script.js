function getComputerChoice (max){
    let RandomNumber = Math.floor(Math.random() * max);
    
    if (RandomNumber === 0){
        return 'Scissors'
    } else if (RandomNumber === 1){
        return 'Paper'
    } else {
        return 'Rock'
    }
}

let computerPoints = 0
let playerPoints = 0
let log = '';

function playRound(computerSelection, playerSelection){

    computerSelection = getComputerChoice(3)
    if (/^(Rock|Paper|Scissors)$/.test(playerSelection)) { // Expresiones regulares, cortesía de ChatGPT.
            
    } else{
        alert(`You have to write 'Paper', 'Scissors' or 'Rock'!!!\n`)
        playRound('','')
    }

    
    if (computerSelection === playerSelection){
        log += `\n The computer chose ${computerSelection}, it's a draw.\n`
    } else if (computerSelection === 'Scissors' && playerSelection === 'Paper'){
        computerPoints++
        log += `\n The computer chose ${computerSelection}, the computer wins.`
        log += `\n You: ${playerPoints} | Computer: ${computerPoints}\n`
    } else if (computerSelection === 'Paper' && playerSelection === 'Rock'){
        computerPoints++
        log += `\n The computer chose ${computerSelection}, the computer wins.`
        log += `\n You: ${playerPoints} | Computer: ${computerPoints}\n`
    } else if (computerSelection === 'Rock' && playerSelection === 'Scissors'){   
        computerPoints++
        log += `\n The computer chose ${computerSelection}, the computer wins.`
        log += `\n You: ${playerPoints} | Computer: ${computerPoints}\n`
    } else if (computerSelection === 'Scissors' && playerSelection === 'Rock'){
        playerPoints++
        log += `\n The computer chose ${computerSelection}, you win.`
        log += `\n You: ${playerPoints} | Computer: ${computerPoints}\n`
    } else if (computerSelection === 'Paper' && playerSelection === 'Scissors'){
        playerPoints++
        log += `\n The computer chose ${computerSelection}, you win.`
        log += `\n You: ${playerPoints} | Computer: ${computerPoints}\n`
    } else if (computerSelection === 'Rock' && playerSelection === 'Paper'){
        playerPoints++
        log += `\n The computer chose ${computerSelection}, you win.`
        log += `\n You: ${playerPoints} | Computer: ${computerPoints}\n`
    } 

    //Contador:
    if(computerPoints>=5|| playerPoints>=5){
        let ganador = computerPoints > playerPoints ? 'THE COMPUTER WINS!!!':'YOU WIN!!!';
        computerPoints = 0;
        playerPoints = 0;
        log += `\n ${ganador}\n`
    }

    let display = document.querySelector('.logs');
    let numberLines = display.offsetHeight/ parseInt(getComputedStyle(display).fontSize, 10)/1.29;
    let logs = log.split("\n").slice(-numberLines)
    display.textContent = logs.join('\n');
}
