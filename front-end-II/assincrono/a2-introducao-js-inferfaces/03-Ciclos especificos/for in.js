/*
    USADO EM
    OBJETOS
*/

let pessoa = {
    nome:"Douglas Lima",
    idade:10,
    profissao: "Programador"
}
for (let caracteristicas in pessoa){
    console.log(pessoa[caracteristicas]);
}
let carro = {
    nome: "fox",
    ano: 2011,
}

for ( let prop in carro){
    console.log(prop, carro[prop]);
}


