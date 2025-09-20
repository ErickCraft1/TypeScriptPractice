// interface Mario {
//     name: string
//     jump: () => void
// }

// interface Sonic {
//     name: string
//     run: () => void
// }

// type Personaje = Mario | Sonic

// Type Guard
/** EN LO POSIBLE EVITARLO
 */
// dejame comprobar que personaje es Sonic
// y esta función determina si es Sonic o no
// function checkIsSonic(personaje: Personaje): personaje is Sonic {
//     return (personaje as Sonic).run !== undefined
// }

// function play(personaje: Personaje) {
//     if (checkIsSonic(personaje)) {
//         personaje.run()
//     }
// }



// Type Never

function fn(x: string | number) {
    if (typeof x === 'string') {
        return x.toUpperCase()
    } else if (typeof x === 'number') {
        return x.toFixed(2)
    } else {
        x // nunca va a llegar aqui
    }
}
