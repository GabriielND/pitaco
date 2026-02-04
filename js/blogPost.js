import { blogPosts } from "./posts.js"

const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");
const blogPost = blogPosts.find((post) => post.slug === slug);
const blogPostContainer = document.querySelector("#blogPost");

const separaPostMusica = blogPost.body.split("###")

let corClasse = ""
let favoritasMusica = "none"
if(blogPost.tags.includes("Música")){
    corClasse = "rosa"
    favoritasMusica = "block"
} else if (blogPost.tags.includes("Filme")){
    corClasse = "laranja"
} else if (blogPost.tags.includes("Livro")){
    corClasse = "verde" 
} else if (blogPost.tags.includes("Jogo")){
    corClasse = "roxo"
}

let btnVisivel = "none"
if(blogPost.tags.includes("Spoilers")){
    btnVisivel = "block"
}

if (!blogPost) {
    console.error("Blog post not found");
    blogPostContainer.innerHTML = `<p>Sorry, this post does not exist.</p>`;
} else {
    const tag = (blogPost.tags[0]).toLowerCase().replace("ú", "u");
    const fillEstrela = parseInt(blogPost.nota) * 9.5
    const blogPostHTML = `
        <div class="tituloPost ${corClasse}">
            <div class = "lingueta"></div>
            <h1>${blogPost.title} </h1>
            <div class="triangulo"></div>
        </div>
        <div class="infoPost">
            <p class="author">${blogPost.author};</p>
            <p class="date">${blogPost.date};</p> <p class="tags">${blogPost.tags.join(", ")};</p>
        </div>
        <div class="conteudoPost ${tag}">
            <div class="fotoNota">
                <img class="imgPost ${tag}" src="${blogPost.imagem}">
                <p id="nota"class="${tag}" style="
                background: linear-gradient(to right, #000 ${fillEstrela}%, #3e3e3e48 0%);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;">ttttt</p>
            </div>
            <p>${blogPost.body}</p>  
        </div>
        <a href="/blog.html" class="btn ${corClasse}" data-link>Voltar</a>
        <a class="btn ${corClasse}" onClick="mostraSpoiler()" style="display: ${btnVisivel}; float: left;">Ver Spoiler</a>
        `;
        blogPostContainer.innerHTML = blogPostHTML;
    }