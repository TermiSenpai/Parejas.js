let intentos = 0
let aciertos = 0
let check = 0
let jugada = 0
let jugada1 = ""
let jugada2 = ""


function listaDeMisCartas() {
    return Array.from( document.getElementsByClassName( "carta" ) )
}

function repartir() {
    //Lista de posibles opciones
    let barajas = [ "red", "red", "blue", "blue" ]
        //Cantidad de cartas
    let misCartas = listaDeMisCartas()
        //Longitud de la lista
    let todasMisClases = barajas.length
    for ( var i = 0; i < todasMisClases; i++ ) {
        //Valor entero para la posición
        let randomIndex = Math.floor( Math.random() * barajas.length )
        let randomClass = barajas[ randomIndex ]
            //Añadiendo la clase
        misCartas[ i ].classList.add( randomClass )
            //eliminando opción elegida de la lista
        barajas.splice( randomIndex, 1 )
    }

}

function girarCarta( n ) {
    miCarta = listaDeMisCartas()
    miCarta.forEach( carta => {
        carta.onclick = function() {
            this.classList.toggle( 'revelado' )
        }
    } )
    comprobarJugada()
}


function comprobarVictoria() {
    if ( aciertos === 2 )
        console.log( "Victoria" )
}

function comprobarJugada() {

}

function reset() {
    let misCartas = listaDeMisCartas()
    misCartas.forEach( carta => {
        carta.classList.remove( "revelado", "red", "blue" )
        console.log( carta )
    } )
    aciertos = 0
    intentos = 0
    jugada = 0
    repartir()
    console.log( "Reseteado!" )

}
