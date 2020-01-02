var sebastian = {
    nombre: 'sebastian',
    apellido: 'gutierrez',
    edad: 31,
    peso: 60
}

console.log(`al inicio del año ${sebastian.nombre} pesa ${sebastian.peso} Kg`)

const INCREMENTO_PESO = 0.2

const aumentarPeso = (persona, incremento) => persona.peso += INCREMENTO_PESO
const disminuirPeso = (persona, incremento) => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= 365; i++) {
    var random = Math.random()

    if (random < 0.25) {
        aumentarPeso(sebastian)
    } else if (random < 0.5) {
        disminuirPeso(sebastian)
    }
}


console.log(`al final del año ${sebastian.nombre} pesa ${sebastian.peso.toFixed(2)} Kg`)