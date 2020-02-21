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

function imprimirMayuscula({ nombre }) {
    console.log(nombre.toUpperCase())
}

imprimirMayuscula(sebastian)
imprimirMayuscula(laura)
imprimirMayuscula({ nombre: 'julian' });