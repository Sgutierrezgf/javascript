var contador = 0

const LLUEVE = () => Math.random() < 0.2

do {
    contador++
} while (!LLUEVE())

console.log(`Fui a ver si llovia ${contador} veces`)