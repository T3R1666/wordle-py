let lista = ["ARBOL", "ANGEL", "MARCO", "COMAS", "ARCOS", "ALOHA"]
let indice = Math.floor(Math.random() * lista.length)

console.log(indice)
let palabra = lista[indice]
console.log(palabra)
let intentos = 6
const button = document.getElementById("guess-button")
const GRID = document.getElementById("grid")

button.addEventListener("click", intentar)

function intentar() {

    const ROW = document.createElement("div")
    ROW.className = "row"
    const INTENTO = leerIntento()
    if (INTENTO == palabra) {
        terminar("<h1>Ganaste! :)</h1>")
        GRID.style.display = "none"
        return
    }
    for (let i in palabra) {
        const SPAN = document.createElement("span")
        SPAN.className = "letter"
        if (palabra[i] == INTENTO[i]) {
            SPAN.innerHTML = INTENTO[i]
            SPAN.style.backgroundColor = "green"
        }

        else if (palabra.includes(INTENTO[i])) {
            SPAN.innerHTML = INTENTO[i]
            SPAN.style.backgroundColor = "yellow"
        }
        else {
            SPAN.innerHTML = INTENTO[i]
            SPAN.style.backgroundColor = "grey"
        }
        ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW)
    intentos--
    if (intentos == 0) {
        terminar("<h1>Perdiste!  :(</h1>")
        GRID.style.display = "none"
    }
}

function leerIntento() {
    let intento = document.getElementById("guess-input").value
    intento = intento.toUpperCase()
    return intento
}

function terminar(mensaje) {
    button.disabled = true
    let contenedor = document.getElementById("guesses")
    contenedor.innerHTML = mensaje
}
