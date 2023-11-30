const memeGallery = ["meme1.png", "meme2.png", "meme3.png",];
const chevronLeft = document.getElementById("chevron-left");
const chevronRight = document.getElementById("chevron-right");
const meme = document.getElementById("meme");
let index = 0;
const lastMeme = memeGallery.length - 1;

const nextMeme = () => {
    meme.src = "/pages/memes/" + memeGallery[index];

    if (index === lastMeme) {
        index = 0;
    } else {
        index++;
    }
};

const prevMeme = () => {
    if (index === 0) {
        index = lastMeme;
    } else {
        index--;
    }
    meme.src = "/pages/memes/" + memeGallery[index];
};

export {prevMeme, nextMeme};