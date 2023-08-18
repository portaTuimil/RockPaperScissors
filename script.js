function getComputerChoice (max){
    let RandomNumber = Math.floor(Math.random() * max);
    
    if (RandomNumber === 0){
        return 'Tijeras'
    } else if (RandomNumber === 1){
        return 'Papel'
    } else {
        return 'Piedra'
    }
}

let computerPoints = 0
let playerPoints = 0
let log = '';

function playRound(computerSelection, playerSelection){

    computerSelection = getComputerChoice(3)
    if (/^(Piedra|Papel|Tijeras)$/.test(playerSelection)) { // Expresiones regulares, cortesía de ChatGPT.
            
    } else{
        alert(`Tienes que escribir 'Piedra', 'Papel' o 'Tijeras'!!!\n`)
        playRound('','')
    }

    
    if (computerSelection === playerSelection){
        log += `\n El ordenador escogió ${computerSelection}, empatas.\n`
    } else if (computerSelection === 'Tijeras' && playerSelection === 'Papel'){
        computerPoints++
        log += `\n El ordenador escogió ${computerSelection}, gana el ordenador.`
        log += `\n Tú: ${playerPoints} | Ordenador: ${computerPoints}\n`
    } else if (computerSelection === 'Papel' && playerSelection === 'Piedra'){
        computerPoints++
        log += `\n El ordenador escogió ${computerSelection}, gana el ordenador.`
        log += `\n Tú: ${playerPoints} | Ordenador: ${computerPoints}\n`
    } else if (computerSelection === 'Piedra' && playerSelection === 'Tijeras'){   
        computerPoints++
        log += `\n El ordenador escogió ${computerSelection}, gana el ordenador.`
        log += `\n Tú: ${playerPoints} | Ordenador: ${computerPoints}\n`
    } else if (computerSelection === 'Tijeras' && playerSelection === 'Piedra'){
        playerPoints++
        log += `\n El ordenador escogió ${computerSelection}, tú ganas.`
        log += `\n Tú: ${playerPoints} | Ordenador: ${computerPoints}\n`
    } else if (computerSelection === 'Papel' && playerSelection === 'Tijeras'){
        playerPoints++
        log += `\n El ordenador escogió ${computerSelection}, tú ganas.`
        log += `\n Tú: ${playerPoints} | Ordenador: ${computerPoints}\n`
    } else if (computerSelection === 'Piedra' && playerSelection === 'Papel'){
        playerPoints++
        log += `\n El ordenador escogió ${computerSelection}, tú ganas.`
        log += `\n Tú: ${playerPoints} | Ordenador: ${computerPoints}\n`
    } 

    //Contador:
    if(computerPoints>=5|| playerPoints>=5){
        let ganador = computerPoints > playerPoints ? 'GANA EL ORDENADOR!!!':'TÚ GANAS!!!';
        computerPoints = 0;
        playerPoints = 0;
        log += `\n ${ganador}\n`
    }

    let display = document.querySelector('.logs');
    let numberLines = display.offsetHeight/ parseInt(getComputedStyle(display).fontSize, 10)/1.29;
    let logs = log.split("\n").slice(-numberLines)
    display.textContent = logs.join('\n');
}
