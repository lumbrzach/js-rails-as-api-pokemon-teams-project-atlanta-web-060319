const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

document.addEventListener("DOMContentLoaded", setUpPage)

function setUpPage() {
    getTrainers()
}

function getTrainers() {
    fetch(TRAINERS_URL)
        .then(resp => resp.json())
        .then(data => createTrainersList(data))
}

function createTrainersList(trainers) {
    trainers.forEach(createTrainerCard)
}

function createTrainerCard(trainer) {
    const main = document.querySelector("main")


    let div = document.createElement("div")
    div.className = "card"

    let p = document.createElement("p")
    p.innerText = trainer.name

    let ul = document.createElement("ul")
    trainer.pokemons.forEach(function(pokemon) {
        let li = document.createElement("li")
        li.innerText = console.log(pokemon.name)
        ul.appendChild(li)
    }) 
  

    let addBtn = document.createElement("button")
    addBtn.innerText = "Add Pokemon"
    addBtn.setAttribute("data-trainer-id", trainer.id)
    addBtn.addEventListener("click", handleAddBtn)

}