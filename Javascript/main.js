START_NUM = 0
ACIERTOS_MAX = 2
let intentos = START_NUM
let aciertos = START_NUM
let check = START_NUM
turno = START_NUM

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
    miCarta = listaDeMisCartas()
    miCarta.forEach( carta => {
        carta.onclick = function() {
            if ( this.classList.contains( 'revelado' ) ) {
                console.log( "Esta carta ya está descubierta!" )
            } else {
                this.classList.toggle( 'revelado' )
                turno++
                if ( turno == 2 ) {
                    cartasIguales = comprobarJugada()
                    if ( cartasIguales === true ) {
                        aciertos++
                        turno = START_NUM
                    } else {
                        turno = START_NUM
                        setTimeout( ocultarCartas, 300 )

                    }
                    comprobarVictoria()
                }
            }
        }
    } )

}

function comprobarJugada() {
    cartasReveladas = listaDeMisCartasReveladas()
    let cartasRojas = START_NUM
    let cartasAzules = START_NUM

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
    aciertos = START_NUM
    intentos = START_NUM
    aciertos = START_NUM
    turno = START_NUM
    repartir()
    console.log( "Reseteado!" )

}

function comprobarVictoria() {
    if ( aciertos === ACIERTOS_MAX )

    function victoriaDelJugador() {
        alert( "Victoria" )
    }
    setTimeout( victoriaDelJugador, 200 )

}
