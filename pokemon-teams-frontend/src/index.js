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
        li.innerText = pokemon.nickname
        ul.appendChild(li)
        let releaseBtn = document.createElement("button")
        releaseBtn.className = "release"
        releaseBtn.innerText = "Release"
        releaseBtn.setAttribute("data-id", pokemon.id)
        releaseBtn.addEventListener("click", handleReleaseBtn)
        li.appendChild(releaseBtn)
    }) 

    let addBtn = document.createElement("button")
    addBtn.innerText = "Add Pokemon"
    addBtn.setAttribute("data-id", trainer.id)
    addBtn.addEventListener("click", handleAddBtn)

    main.appendChild(div)
    div.appendChild(p)
    div.appendChild(addBtn)
    div.appendChild(ul)
}

function handleReleaseBtn(e) {
    e.target.parentElement.remove()
    releasePokemon(e.target.dataset.id)
}

function releasePokemon(id) {
    fetch(`http://localhost:3000/pokemons/${id}`, {
        method: "DELETE"
})
}

function handleAddBtn() {

}

