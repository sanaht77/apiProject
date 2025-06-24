const factText = document.getElementById("fact");
const button = document.getElementById("button");
const image = document.getElementById("cat");

function getFact(){

    fetch("https://catfact.ninja/fact")
        .then(response => response.json())
        .then(data => {
            factText.textContent = data.fact;
            image.src = "cat/pixil-frame-1.png";
    })
    .catch(error => {
        factText.textContent = "couldn't load a cat fact...";
        console.error("API error:", error);
    });

}

button.addEventListener("click", getFact);