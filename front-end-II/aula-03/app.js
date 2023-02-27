let userPoint = 0;
let machinePoint = 0;

perguntarUsuarioDesejaJogar();
   

function perguntarUsuarioDesejaJogar() {
  let perguntarUsuarioDesejaJogar = confirm("Você ousa a desafiar a Skynet?");

  if (perguntarUsuarioDesejaJogar === true) {
    comecarJogo();
  } else {
    alert("Obrigado por visitar a pagina");
  }
}

function verificarGanhador(userPlay, machinePlay) {
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

  do {
    comecarJogo();
  } while (userPoint < 2 || machinePoint < 2);
}

function comecarJogo() {
  let userPlay = Number(prompt("O que você deseja jogar? \n 1 = pedra \n 2 = papel \n 3= tesoura")
  );
  console.log(userPlay);
  let machinePlay = Math.floor(Math.random() * 3) + 1;
  console.log(machinePlay);
}

