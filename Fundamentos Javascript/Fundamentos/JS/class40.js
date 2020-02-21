function crearSaludo(finalFrase) {
    return function(nombre) {
        console.log(`Hola ${nombre} ${finalFrase}`)
    }
}

const SALUDOARGENTINO = crearSaludo('che')
const SALUDOMEXICANO = crearSaludo('güey')
const SALUDOCOLOMBIANO = crearSaludo('parcero')

SALUDOARGENTINO('sasha')
SALUDOMEXICANO('laura')
SALUDOCOLOMBIANO('sebas')