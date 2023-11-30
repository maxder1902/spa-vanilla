import { router } from "./router";

const posts = ["post1.html", "post2.html", "post3.html"];
const main = document.getElementById("main-page")

const displayPostList = () => {
    let postContainer = document.createElement("div");
    postContainer.className = "post-container";
    if ( window.location.pathname == "/posts"){
        for ( let  i = 0; i < posts.length; i++) {
            postContainer.innerHTML += `<a href="/posts/${i}" onclick="route()">Post #${i + 1}</a>`;
        }
        main.appendChild(postContainer);
    }

    postContainer.addEventListener("click", () => {
        document.getElementById("root").style.marginTop = "27rem";
    });
    
}

//Add post to router
const addPost = () => {
    for (let i = 0; i < posts.length; i++) {
        router.routes['/posts/' + i] = '/pages/posts/' + posts[i];
    }
    
}

export {posts, addPost, displayPostList};

