let intentos = 0
let aciertos = 0
let check = 0
turno = 0

function listaDeMisCartas() {
    return Array.from( document.getElementsByClassName( "carta" ) )
}

function listaDeMisCartasReveladas() {
    return Array.from( document.getElementsByClassName( "revelado" ) )
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

function girarCarta() {
    turno = 0
    miCarta = listaDeMisCartas()
    miCarta.forEach( carta => {
        carta.onclick = function() {
            this.classList.toggle( 'revelado' )
            turno++
            if ( turno == 2 ) {
                cartasIguales = comprobarJugada()
                if ( cartasIguales === true ) {
                    aciertos++
                    turno = 0
                } else {
                    turno = 0
                    ocultarCartas()
                }
                comprobarVictoria()
            }
        }
    } )

}

function comprobarJugada() {
    cartasReveladas = listaDeMisCartasReveladas()
    let cartasRojas = 0
    let cartasAzules = 0

    for ( let i = 0; i < cartasReveladas.length; i++ ) {
        if ( cartasReveladas[ i ].classList.contains( "red" ) ) {
            cartasRojas++
        }
        if ( cartasReveladas[ i ].classList.contains( "blue" ) ) {
            cartasAzules++
        }
    }

    if ( cartasRojas == 2 || cartasAzules == 2 )
        return true

    return false
}


function ocultarCartas() {
    let misCartas = listaDeMisCartasReveladas()
    misCartas.forEach( carta => {
        carta.classList.remove( "revelado" )
    } )
}

function descolorearCartas() {
    let misCartas = listaDeMisCartas()
    misCartas.forEach( carta => {
        carta.classList.remove( "red", "blue" )
    } )
}

function reset() {
    ocultarCartas()
    descolorearCartas()
    aciertos = 0
    intentos = 0
    aciertos = 0
    turno = 0
    repartir()
    console.log( "Reseteado!" )

}

function comprobarVictoria() {
    if ( aciertos === 2 )
        console.log( "Victoria" )

}
