var h1Titre = document.querySelector("h1")
h1Titre.innerText = "Le meilleur burger"
var h2Titre = document.querySelectorAll("h2")[1]
h2Titre.innerText = "Il est délicieux, essayez-le!"
var painDuHaut =document.getElementById("top")
painDuHaut.style.width = "50%";
var SecondBoul = document.getElementsByClassName("meatball")[1]
SecondBoul.classList.add = "pickle"
var ThirdBoul = document.getElementsByClassName("meatball")[2]
ThirdBoul.style.width = "90px"
var Tomato = document.getElementsByClassName("tomato")[0]
Tomato.style.backgroundcolor = "blue";
var cheese = document.querySelectorAll(".cheese")

var cheese1 = document.querySelectorAll(".cheese")[0]

var copy = JSON.parse(JSON.stringify(cheese1));

document.querySelectorAll(".cheese")[2].appendChild(copy);





var painDuBas = document.getElementsByClassName("bun-bottom")[0]

painDuBas.setAttribute(id, "bottom")













