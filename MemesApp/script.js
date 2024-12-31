let meme = document.getElementById("meme");
let title = document.getElementById("title");
let getMemeBtn = document.getElementById("get-meme-btn");

//API Url
let url="https://meme-api.com/gimme/";

//array of subreddits of your choice
let subreddits = ["catmemes","wholesomemes","dogmemes","me_irl",'dankmemes'];

//function to get random meme
let getMeme = () => {
    //choose a random subreddut from the subreddits array
    let randomSubreddit = subreddits[Math.floor(Math.random() * subreddits.length)];

    //fetch data from the api
    fetch(url+randomSubreddit)
    .then(resp =>resp.json())
    .then(data => {
        console.log(data);
        let memeImg = new Image();

        //display meme image and title only after the image loads
        memeImg.onload = () => {
            meme.src = data.url;
            title.innerHTML = data.title;
        };
        memeImg.src = data.url;
    })
}

//call the getMeme() on button click and on window load
getMemeBtn.addEventListener("click", getMeme);
window.addEventListener("load", getMeme);