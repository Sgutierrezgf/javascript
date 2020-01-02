const SEBAS = {
    nombre: 'Sebastian',
    apellido: 'Gutierrez'
}

const XIME = {
    nombre: 'Ximena',
    apellido: 'Soto'
}

function saludar(saludo = 'Hola') {
    console.log(`${saludo}, mi nombre es ${this.nombre}`)
}

// const SALUDARASEBAS = saludar.bind(SEBAS)
// const SALUDARAXIME = saludar.bind(XIME)

setTimeout(saludar.bind(SEBAS, 'Hola viejo'), 1000)