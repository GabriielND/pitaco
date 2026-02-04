import { blogPosts } from "./posts.js"

const blogCardsContainer = document.querySelector("#blog-cards-container");

blogPosts.forEach(post => {
    const blogCard = document.createElement("div"); blogCard.classList.add("blog-card"); blogCard.setAttribute("data-id", post.id);
    const fillEstrela = parseInt(post.nota) * 10
    let blogCardHTML
    let preview = post.body.substring(0, 150)
    let corClasse = ""
    if(post.tags.includes("Música")){
        corClasse = "rosa"
        preview = post.body.split("<ul")[0]
    } else if (post.tags.includes("Filme")){
        corClasse = "laranja"
    } else if (post.tags.includes("Livro")){
        corClasse = "verde" 
    } else if (post.tags.includes("Jogo")){
        corClasse = "roxo"
    }
    blogCardHTML = `
    <a href="/blog/blog-post.html?slug=${post.slug}" data-link class="${corClasse}">
        <div class="topoPostIt"></div>
        <div class="corpoPostIt">
            <h2 class="blog-title">${post.title}</h2>
            <div class="cardInfo">
                <img class="${corClasse}" src="${post.imagem}"></img>
                <div class="textoCard">
                    <div class="autorData">
                        <small class="author">${post.author}</small>
                        <small id="notaCard" style="
                        background: linear-gradient(to right, #000 ${fillEstrela}%, #00000048 0%);
                        background-clip: text;
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent">ttttt</small>
                        <small class="date">${post.date}</small> 
                    </div>
                    <p class="blog-excerpt">${preview}...</p>
                    <small class="tags">${post.tags.join(", ")}</small>
                </div>
            </div>
        </div>
    </a>`; 
    blogCard.innerHTML = blogCardHTML;
    blogCardsContainer.prepend(blogCard);
});