let  contentRef= document.querySelector("#content")

// let texto = document.createTextNode("Texto criado pelo JavaScript")

// // contentRef.appendChild(texto)front-end-II/aula-06/app.js
// let noticia ={
//     titulo: `${titulo}`,
//     descricao: `${descricao}`
// }

const noticias = [
    {
        titulo: `Este é o Primeiro Post`,
        descricao: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, ipsum.`,
        url: `#`
    },
    {
        titulo: `Este é o SEGUNDO Post`,
        descricao: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, ipsum.`,
        url: `#`

    },
    {
        titulo: `Este é o TERCEIRO Post`,
        descricao: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, ipsum.`,
        url: `#`

    },
]

// console.log(noticias)

    for(let noticia of noticias){
// console.log(noticia) verifique a dom
        contentRef.innerHTML +=  `
        <article>
        <h1>${noticia.titulo}</h1>
        <p>${noticia.descricao}</p>
        <a href="${noticia.url}">Acesse a notícia</a>
    </article>
        `
    }

    // for (let i = 0; i < noticias.length; i++) {
    //     const noticia = noticias[i];

    //     console.log(noticia)
        
    // }
