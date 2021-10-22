let playerScore = 0;
let computerScore = 0;

/*Piezas peones*/
const piece1 = document.getElementById("piece1")
const piece2 = document.getElementById("piece2")
const piece3 = document.getElementById("piece3")
const piece4 = document.getElementById("piece4")
const piece5 = document.getElementById("piece5")
const piece6 = document.getElementById("piece6")
const piece7 = document.getElementById("piece7")
const piece8 = document.getElementById("piece8")

/*Fila 5*/
const fila5 = document.getElementById("fila5")
const a4 = document.getElementById("a4")
const b4 = document.getElementById("b4")
const c4 = document.getElementById("c4")
const d4 = document.getElementById("d4")
const e4 = document.getElementById("e4")
const f4 = document.getElementById("f4")
const g4 = document.getElementById("g4")
const h4 = document.getElementById("h4")

/*Fila 6*/
const fila6 = document.getElementById("fila6")
const a3 = document.getElementById("a3")
const b3 = document.getElementById("b3")
const c3 = document.getElementById("c3")
const d3 = document.getElementById("d3")
const e3 = document.getElementById("e3")
const f3 = document.getElementById("f3")
const g3 = document.getElementById("g3")
const h3 = document.getElementById("h3")

/*Fila 7*/
const fila7 = document.getElementById("fila7")
const a2 = document.getElementById("a2")
const b2 = document.getElementById("b2")
const c2 = document.getElementById("c2")
const d2 = document.getElementById("d2")
const e2 = document.getElementById("e2")
const f2 = document.getElementById("f2")
const g2 = document.getElementById("g2")
const h2 = document.getElementById("h2")

/*Fila 7 a fila 6 */
fila7.addEventListener("dragstart", (e) =>{
    e.dataTransfer.setData("text/plain", e.target.id)
})

fila6.addEventListener("dragover", (e) =>{
    e.preventDefault()
})

fila6.addEventListener("drop", (e) =>{
    e.preventDefault()
    /*Esto agarra cualquier pieza de la fila6*/
    const itemPeon = document.getElementById(e.dataTransfer.getData("text"))
    movesGame(itemPeon)
})

/*Fila 7 a fila 5 */
fila7.addEventListener("dragstart", (e) =>{
    e.dataTransfer.setData("text/plain", e.target.id)
})

fila5.addEventListener("dragover", (e) =>{
    e.preventDefault()
})

fila5.addEventListener("drop", (e) =>{
    e.preventDefault()
    /*Esto agarra cualquier pieza de la fila6*/
    const itemPeon = document.getElementById(e.dataTransfer.getData("text"))
    movesGame2(itemPeon)
})

/*Movimientos de fila7 a fila6 */
const movesGame = (itemPeon) =>{
    if(itemPeon == piece1){
        a2.removeChild(itemPeon)
        a3.appendChild(itemPeon)
    }
    if(itemPeon == piece2){
        b2.removeChild(itemPeon)
        b3.appendChild(itemPeon)
    }
    if(itemPeon == piece3){
        c2.removeChild(itemPeon)
        c3.appendChild(itemPeon)
    }
    if(itemPeon == piece4){
        d2.removeChild(itemPeon)
        d3.appendChild(itemPeon)
    }
    if(itemPeon == piece5){
        e2.removeChild(itemPeon)
        e3.appendChild(itemPeon)
    }
    if(itemPeon == piece6){
        f2.removeChild(itemPeon)
        f3.appendChild(itemPeon)
    }
    if(itemPeon == piece7){
        g2.removeChild(itemPeon)
        g3.appendChild(itemPeon)
    }
    if(itemPeon == piece8){
        h2.removeChild(itemPeon)
        h3.appendChild(itemPeon)
    }
}

/*Movimientos de fila7 a fila5 */
const movesGame2 = (itemPeon) =>{
    if(itemPeon == piece1){
        a2.removeChild(itemPeon)
        a4.appendChild(itemPeon)
    }
    if(itemPeon == piece2){
        b2.removeChild(itemPeon)
        b4.appendChild(itemPeon)
    }
    if(itemPeon == piece3){
        c2.removeChild(itemPeon)
        c4.appendChild(itemPeon)
    }
    if(itemPeon == piece4){
        d2.removeChild(itemPeon)
        d4.appendChild(itemPeon)
    }
    if(itemPeon == piece5){
        e2.removeChild(itemPeon)
        e4.appendChild(itemPeon)
    }
    if(itemPeon == piece6){
        f2.removeChild(itemPeon)
        f4.appendChild(itemPeon)
    }
    if(itemPeon == piece7){
        g2.removeChild(itemPeon)
        g4.appendChild(itemPeon)
    }
    if(itemPeon == piece8){
        h2.removeChild(itemPeon)
        h4.appendChild(itemPeon)
    }
}