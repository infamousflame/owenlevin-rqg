var header = document.getElementById("header");
header.innerHTML = "<h1>Random Tip Generator</h1> <p>This is a description of the project</p>"
header.style = "background-color:grey";

var quoteArea = document.createElement("div");
quoteArea.id = "quoteArea";
document.body.appendChild(quoteArea);

var noun = [{noun:"cat "}, {noun:"dog "}, {noun:"parrot "}, {noun:"key "}];
var word = [{word:"wanted "}, {word: "had "}, {word:"needed "}, {word:"longed "}];
var anotherNoun = [{noun:"cheese "}, {noun: "xbone "}, {noun:"death "}, {noun: "meme "}];

function generateSentence(){
    
    quoteArea.textContent = "The " + noun[Math.floor((Math.random() * noun.length))].noun + word[Math.floor((Math.random() * word.length))].word + anotherNoun[Math.floor((Math.random() * anotherNoun.length))].noun;
    document.body.appendChild(quoteArea);
}
