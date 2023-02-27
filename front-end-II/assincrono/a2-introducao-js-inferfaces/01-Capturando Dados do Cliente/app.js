// alert('Ola Visitante ');

// alert('que bom que clicou em ok ');

// let resultado = confirm('Deseja realmente excluir esse arquivo?');

// console.log(resultado)

// let userName= prompt("Digite Seu nome")

// // alert(`Ola ${userName}`)

// document.querySelector('h1').innerText += `  ${userName}`  





let tratamentoPersonalizado = confirm("Deseja um tratamento personalizado?")

if(tratamentoPersonalizado) {
  let nome = prompt("Por favor, digite seu nome");
   alert("Bem-vindo ao nosso site "+ nome +". Muito obrigado pela sua visita, estamos à sua disposição! ");
} else {
   alert("Obrigado por conectar.")
}