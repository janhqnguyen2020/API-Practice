/*
    fetch = function used for making HTTP requests to fetch resources.
    (JSON style data, images, files)
    simplifies asynchronous data fetching in JavaScript and used for interacting with API's to retrieve and send data asynchronously over the web.
    
    fetch(url, {options})

*/

/*
     EXAMPLE OF a FETCH FUNCTION

fetch("https://pokeapi.co/api/v2/pokemon/oshawott")
    .then(response => {

        if(!response.ok){
            throw new Error("This Pokemon could not be found. Fetching resource failed");
        }
        return response.json();
        
    })
    .then(data => console.log(data))
    .catch(error => console.error(error));
*/

async function fetchData(){
    try
    {

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok)
        {
            throw new Error("This Pokemon could not be found. Fetching resource failed");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }
    catch(error)
    {
        console.error(error);
    }
}