var userWannaPlay = confirm("Você ousa a desafiar a Skynet?");

if (userWannaPlay === true) {
  startGame();
} else {
  alert("Humanos são tão covardes!");
}

function startGame() {

  let userPoint = 0;
  let machinePoint = 0;

  do {  let userPlay = Number(prompt("O que você deseja jogar? \n 1 = pedra \n 2 = papel \n 3= tesoura"));   
  let machinePlay = Math.floor(Math.random() * 3) + 1;
  console.log(machinePlay);
  console.log(userPlay)

//   VALIDAÇÃO DE JOGADAS
                  while (userPlay !== 1 && userPlay !== 2 && userPlay !== 3) {
                     alert("Jogada inválida. Digite uma jogada válida (1, 2 ou 3)");
                     userPlay = Number(
                        prompt("O que você deseja jogar? 1 = pedra, 2 = papel, 3 = tesoura")
                     );
}

//  CONTABILIZAÇÃO DE PONTOS
      if (userPlay === 1 && machinePlay === 2) {
      console.log("Você perdeu! ");
      machinePoint++;
    } else if (userPlay === 2 && machinePlay === 3) {
      console.log("Você perdeu!");
      machinePoint++;
    } else if (userPlay === 3 && machinePlay === 1) {
      console.log(" Você perdeu! ");
      machinePoint++;
    } else if (userPlay === machinePlay) {
      console.log("Deu empate!");
    } else {
      console.log("Você venceu!! ");
      userPoint++;
    }

   //  mostra os pontos no console
    console.log(`Usuário tem ${userPoint}`);
    console.log(`A máquina  tem ${machinePoint}`);

  } while (userPoint < 2 && machinePoint < 2);

  if (userPoint === 2) {
    alert("Você derrotou a Skynet!! è o Heroi da Resistencia");

  } else if (machinePoint === 2) {
    alert("SkyNet obliterou você");

  }
}

// validar as jogadas feitas, somente prosseguir com entradas válidas // feito 
//  AUMENTAR A DIFICULDADE
// REFATORAR PARA FUNCTIONS

