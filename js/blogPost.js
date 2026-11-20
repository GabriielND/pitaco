import { blogPosts } from "./posts.js"

const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");
const blogPost = blogPosts.find((post) => post.slug === slug);
const blogPostContainer = document.querySelector("#blogPost");
const blogPostTitle = document.querySelector("#blogTitle");

const separaPostMusica = blogPost.body.split("###")

let corClasse = ""
let favoritasMusica = "none"
if(blogPost.tags.includes("Música")){
    corClasse = "rosa"
    favoritasMusica = "block"
} else if (blogPost.tags.includes("Filme") || blogPost.tags.includes("Série")){
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
        <a href="../index.html" class="btn ${corClasse}" data-link>Voltar</a>
        <a class="btn ${corClasse}" onClick="mostraSpoiler()" style="display: ${btnVisivel}; float: left;">Ver Spoiler</a>
        `;
        blogPostContainer.innerHTML = blogPostHTML;
        blogPostTitle.innerHTML = blogPost.title;


        //Meta Tags - Primary
        const tituloPrimary = document.createElement('meta');
        tituloPrimary.setAttribute("property", "title")
        tituloPrimary.content = blogPost.title;
        document.getElementsByTagName('head')[0].appendChild(tituloPrimary);

        const descricaoPrimary = document.createElement('meta');
        descricaoPrimary.setAttribute("property", "description")
        descricaoPrimary.content = blogPost.body.substring(0,300).replaceAll("<br>                 ", "\n") + "[...]";
        document.getElementsByTagName('head')[0].appendChild(descricaoPrimary);

        //Meta Tags - Facebook/Open Graph
        const titulo = document.createElement('meta');
        titulo.setAttribute("property", "og:title")
        titulo.content = blogPost.title;
        document.getElementsByTagName('head')[0].appendChild(titulo);

        const imagem = document.createElement('meta');
        imagem.setAttribute("property", "og:image")
        imagem.content = blogPost.imagem;
        document.getElementsByTagName('head')[0].appendChild(imagem);

        const descricao = document.createElement('meta');
        descricao.setAttribute("property", "og:description")
        descricao.content = blogPost.body.substring(0,300).replaceAll("<br>                 ", "\n") + "[...]";
        document.getElementsByTagName('head')[0].appendChild(descricao);

        const site = document.createElement('meta');
        site.setAttribute("property", "og:url")
        site.content = "https://pitaco.blog.br/blog/blog-post.html?slug=" + blogPost.slug;
        document.getElementsByTagName('head')[0].appendChild(site);

        //Meta Tags - Twitter
        const nomeTt = document.createElement('meta');
        nomeTt.setAttribute("property", "twitter:title")
        nomeTt.content = blogPost.title;
        document.getElementsByTagName('head')[0].appendChild(nomeTt);

        const imagemTt = document.createElement('meta');
        imagemTt.setAttribute("property", "twitter:image")
        imagemTt.content = blogPost.imagem;
        document.getElementsByTagName('head')[0].appendChild(imagemTt);

        const descricaoTt = document.createElement('meta');
        descricaoTt.setAttribute("property", "twitter:description")
        descricaoTt.content = blogPost.body.substring(0,300).replaceAll("<br>                 ", "\n") + "[...]";
        document.getElementsByTagName('head')[0].appendChild(descricaoTt);

        const siteTt = document.createElement('meta');
        siteTt.setAttribute("property", "twitter:url")
        siteTt.content = "https://pitaco.blog.br/blog/blog-post.html?slug=" + blogPost.slug;
        document.getElementsByTagName('head')[0].appendChild(siteTt);

    }