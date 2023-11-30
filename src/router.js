import { displayPostList } from "./Posts";
import { prevMeme, nextMeme } from "./Memes";
const router = {
    route: (event) => {
        event = event || window.event;
        event.preventDefault();
        window.history.pushState({}, "", event.target.href);
        router.handleLocation();
    },
    routes: {
        404: "/pages/404.html",
        "/": "/pages/home.html",
        "/posts": "/pages/posts.html",
        "/memes": "/pages/memes.html",
    },

    handleLocation: async () => {
        const path = window.location.pathname;
        const route = router.routes[path] || router.routes[404];
        const html = await fetch(route).then((data) => data.text());
        document.getElementById("main-page").innerHTML = html;
        if ( path == "/memes" ) {
            console.log(meme.src);
            let index = 0;
            document.getElementById("chevron-left").addEventListener("click", () =>{
                const memeGallery = ["meme1.png", "meme2.png", "meme3.png"];
                const lastMeme = memeGallery.length - 1;

                index = (index === 0) ? lastMeme : index - 1;

                meme.src = "/pages/memes/" + memeGallery[index];
            });
            document.getElementById("chevron-right").addEventListener("click", () => {
                const memeGallery = ["meme1.png", "meme2.png", "meme3.png"];
                const lastMeme = memeGallery.length - 1;
                meme.src = "/pages/memes/" + memeGallery[index];

                if (index === lastMeme) {
                    index = 0;
                } else {
                    index++;
                }
            });
        }

        if (path == "/"){
            document.getElementById("root").style.marginTop = "4rem";
        }
        displayPostList();
        
    },
};


export {router};
