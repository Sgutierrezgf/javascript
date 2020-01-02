var sebastian = {
    nombre: 'sebastian',
    apellido: 'gutierrez',
    edad: 28,
    ingeniero: false,
    cocinero: true,
    tecnologo: true,
    gamer: true
}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es:`)

    if (persona.ingeniero) {
        console.log('ingeniero')
    }
    if (persona.cocinero) {
        console.log('cocinero')
    }
    if (persona.tecnologo) {
        console.log('tecnologo')
    }
    if (persona.gamer) {
        console.log('gamer')
    }
}

function esMayor(persona) {
    return persona.edad >= 18
}

function imprimirEdad(persona) {
    if (esMayor(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)

    }
}