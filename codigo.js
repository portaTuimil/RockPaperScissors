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

function playRound(computerSelection, playerSelection){

    computerSelection = getComputerChoice(3)
    if (/^(Piedra|Papel|Tijeras)$/.test(playerSelection)) { // Expresiones regulares, cortesía de ChatGPT.
            
    } else{
        alert(`Tienes que escribir 'Piedra', 'Papel' o 'Tijeras'!!!\n`)
        playRound('','')
    }

    
    if (computerSelection === playerSelection){
        alert(`El ordenador escogió ${computerSelection}, empatas.\n`)
    } else if (computerSelection === 'Tijeras' && playerSelection === 'Papel'){
        computerPoints++
        alert(`El ordenador escogió ${computerSelection}, gana el ordenador.`)
        alert(`Tú: ${playerPoints} | Ordenador: ${computerPoints}\n`)
    } else if (computerSelection === 'Papel' && playerSelection === 'Piedra'){
        computerPoints++
        alert(`El ordenador escogió ${computerSelection}, gana el ordenador.`)
        alert(`Tú: ${playerPoints} | Ordenador: ${computerPoints}\n`)
    } else if (computerSelection === 'Piedra' && playerSelection === 'Tijeras'){   
        computerPoints++
        alert(`El ordenador escogió ${computerSelection}, gana el ordenador.`)
        alert(`Tú: ${playerPoints} | Ordenador: ${computerPoints}\n`)
    } else if (computerSelection === 'Tijeras' && playerSelection === 'Piedra'){
        playerPoints++
        alert(`El ordenador escogió ${computerSelection}, tú ganas.`)
        alert(`Tú: ${playerPoints} | Ordenador: ${computerPoints}\n`)
    } else if (computerSelection === 'Papel' && playerSelection === 'Tijeras'){
        playerPoints++
        alert(`El ordenador escogió ${computerSelection}, tú ganas.`)
        alert(`Tú: ${playerPoints} | Ordenador: ${computerPoints}\n`)
    } else if (computerSelection === 'Piedra' && playerSelection === 'Papel'){
        playerPoints++
        alert(`El ordenador escogió ${computerSelection}, tú ganas.`)
        alert(`Tú: ${playerPoints} | Ordenador: ${computerPoints}\n`)
    } 

    //Contador:
    if(computerPoints>=5|| playerPoints>=5){
        let ganador = computerPoints > playerPoints ? 'GANA EL ORDENADOR!!!':'TÚ GANAS!!!';
        computerPoints = 0;
        playerPoints = 0;
        alert(ganador)
    }

}
