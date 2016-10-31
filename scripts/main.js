var header = document.getElementById("header");
header.innerHTML = "<h1>Random Tip Generator</h1> <p>This is a description of the project</p>"
header.style = "background-color:grey";

var quoteArea = document.createElement("div");
quoteArea.id = "quoteArea";
document.body.appendChild(quoteArea);

var noun = [{noun:"cat "}, {noun:"dog "}, {noun:"parrot "}, {noun:"key "}];
var word = [{word:"wanted "}, {word: "had "}, {word:"needed "}, {word:"longed "}];
var anotherNoun = [{noun:"cheese "}, {noun: "xbone "}, {noun:"death "}, {noun: "meme "}];


function randomNum(){
    return Math.floor((Math.random() * noun.length));
}
function generateSentence(){
    
    quoteArea.textContent = "The " + noun[randomNum()].noun + word[randomNum()].word + anotherNoun[randomNum()].noun;
    document.body.appendChild(quoteArea);
}
