import { router } from "./src/router";
import { addPost } from "./src/Posts";
import { displayPostList } from "./src/Posts";

document.addEventListener('DOMContentLoaded', () => {
    window.onpopstate = () => {
        router.handleLocation();
    };

    window.route = router.route;
    router.handleLocation();
    addPost();
    displayPostList();
    

});