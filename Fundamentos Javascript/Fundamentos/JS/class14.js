var sebastian = {
    nombre: 'sebastian',
    apellido: 'gutierrez',
    edad: 31,
    peso: 60
}

console.log(`al inicio del año ${sebastian.nombre} pesa ${sebastian.peso} Kg`)

const INCREMENTO_PESO = 0.2
const DIAS_ANO = 365

const aumentarPeso = (persona, incremento) => persona.peso += INCREMENTO_PESO
const disminuirPeso = (persona, incremento) => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4
const META = sebastian.peso - 3
const DIAS = 0

while (sebastian.peso > META) {
    if (comeMucho()) {
        aumentarPeso(sebastian)
    }
    if (realizaDeporte()) {
        disminuirPeso(sebastian)
    }
    DIAS += 1
}

console.log(`Pasaron ${DIAS} dias hasta que ${sebastian.nombre} adelgazo 3Kg`)
console.log(`al final del año ${sebastian.nombre} pesa ${sebastian.peso.toFixed(2)} Kg`)