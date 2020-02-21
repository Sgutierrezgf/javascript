var sebastian = {
    nombre: 'Sebastian',
    apellido: 'Gutierrez',
    edad: 31
}
var laura = {
    nombre: 'laura',
    apellido: 'cuervo',
    edad: 28
}

function imprimirMayuscula(persona) {
    // var nombre = persona.nombre
    var { nombre } = persona
    console.log(nombre.toUpperCase())
}

imprimirMayuscula(sebastian)
imprimirMayuscula(laura)
    // imprimirMayuscula({ nombre: 'julian' })

function imprimirNombreEdad() {
    // Hola, mi nombre es sebastian y tengo 31 años
    // Hola, mi nombre es laura y tengo 28 años
}