import { blogPosts } from "./posts.js"

const blogCardsContainer = document.querySelector("#blog-cards-container");

blogPosts.forEach(post => {
    const blogCard = document.createElement("div"); blogCard.classList.add("blog-card"); blogCard.setAttribute("data-id", post.id);
    let blogCardHTML
    if(post.tags.includes("Música")){
        blogCardHTML = `
            <a href="/blog/blog-post.html?slug=${post.slug}" data-link class="rosa">
                <h2 class="blog-title">${post.title}</h2>
                <div class="autorData">
                    <small class="author">${post.author}</small>
                    <small class="date">${new Date(post.date).toLocaleDateString()}</small> 
                </div>
                <p class="blog-excerpt">${post.body.substring(0, 100)}...</p>
                <small class="tags">${post.tags.join(", ")}</small>
            </a>`; 
    } else if (post.tags.includes("Filme")){
        blogCardHTML = `
            <a href="/blog/blog-post.html?slug=${post.slug}" data-link class="laranja">
                <h2 class="blog-title">${post.title}</h2>
                <div class="autorData">
                    <small class="author">${post.author}</small>
                    <small class="date">${new Date(post.date).toLocaleDateString()}</small> 
                </div>
                <p class="blog-excerpt">${post.body.substring(0, 100)}...</p>
                <small class="tags">${post.tags.join(", ")}</small>
            </a>`; 
    } else if (post.tags.includes("Livro")){
        blogCardHTML = `
            <a href="/blog/blog-post.html?slug=${post.slug}" data-link class="verde">
                <h2 class="blog-title">${post.title}</h2>
                <div class="autorData">
                    <small class="author">${post.author}</small>
                    <small class="date">${new Date(post.date).toLocaleDateString()}</small> 
                </div>
                <p class="blog-excerpt">${post.body.substring(0, 100)}...</p>
                <small class="tags">${post.tags.join(", ")}</small>
            </a>`; 
    } else if (post.tags.includes("Jogo")){
        blogCardHTML = `
            <a href="/blog/blog-post.html?slug=${post.slug}" data-link class="roxo">
                <h2 class="blog-title">${post.title}</h2>
                <div class="autorData">
                    <small class="author">${post.author}</small>
                    <small class="date">${new Date(post.date).toLocaleDateString()}</small> 
                </div>
                <p class="blog-excerpt">${post.body.substring(0, 100)}...</p>
                <small class="tags">${post.tags.join(", ")}</small>
            </a>`; 
    } else{
       blogCardHTML = `
            <a href="/blog/blog-post.html?slug=${post.slug}" data-link>
                <h2 class="blog-title">${post.title}</h2>
                <div class="autorData">
                    <small class="author">${post.author}</small>
                    <small class="date">${new Date(post.date).toLocaleDateString()}</small> 
                </div>
                <p class="blog-excerpt">${post.body.substring(0, 100)}...</p>
                <small class="tags">${post.tags.join(", ")}</small>
            </a>`; 
    }
    blogCard.innerHTML = blogCardHTML;
    blogCardsContainer.appendChild(blogCard);
});