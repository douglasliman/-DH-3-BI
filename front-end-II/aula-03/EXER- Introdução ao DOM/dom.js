// OBTENDO O BODY
document.querySelector("body");

// obtendo o h1
document.querySelector("h1");
//obtendo todos os li do conteudo
document.querySelectorAll("ul li");
//obtendo li's separados
document.getElementsByClassName(".item1");
document.getElementsByClassName(".item2");
document.getElementsByClassName(".item3");

// obtendo o article card
document.querySelector("#card1");
// obtendo o h2 do article
document.querySelector("#titleCard1");
// obtendo o P do artcile
console.log(document.querySelector("#card1 p"));

// obtendo o segunto artcile sem id ou class
document.querySelector("article:nth-of-type(2)");
// obtendo seu h2
document.querySelector("article:nth-of-type(2) h2");
// obtendo seu p
document.querySelector("article:nth-of-type(2) p");

// obtendo o article animado
document.querySelector(".animado");
// obtendo o h2 do article animado
document.querySelector(".animado h2");
// obtendo o P do article animado
document.querySelector(".animado p");

// obtendo o article diferente
document.querySelector(".diferente");
// obtendo o h2 do article animado
document.querySelector("article.diferente h2");
// obtendo o P do article animado
document.querySelector("article.diferente p");

// obtendo o quinto artcile sem id ou class
document.querySelector("article:nth-of-type(5)");
// obtendo seu h2
document.querySelector("article:nth-of-type(5) h2");
// obtendo seu p
document.querySelector("article:nth-of-type(5) p");

// obtendo o sexto artcile sem id ou class
document.querySelector("article:nth-of-type(6)");
// obtendo seu h2
document.querySelector("article:nth-of-type(6) h2");
// obtendo seu p
document.querySelector("article:nth-of-type(6) p");



// document.querySelectorAll("article")

// const articles = document.querySelectorAll("article")

// console.log(articles[5])