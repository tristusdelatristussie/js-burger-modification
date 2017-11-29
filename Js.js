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
Tomato.style.backgroundColor = "blue"
var cheese = document.querySelectorAll(".cheese")


for( i=0; i < cheese.length ; i++){
    cheese[i].style.borderRadius = "15px"}

var cheese1 = document.querySelectorAll(".cheese")[0].cloneNode()

var patt = document.getElementsByClassName("patty")[1]

burg = document.getElementsByClassName("burger")[0]   

burg.insertBefore(cheese1,patt)

var painDuBas = document.getElementsByClassName("bun-bottom")[0]

painDuBas.setAttribute("id", "bottom")

var lien = document.getElementsByTagName("a")[0]

lien.addEventListener("click", function (e) {
    
    lien.setAttribute("href","https://www.google.fr")

    window.open(lien);
});

var plat = document.getElementsByClassName("plate")[0].cloneNode()

document.getElementsByClassName("burger")[0].appendChild(plat)













