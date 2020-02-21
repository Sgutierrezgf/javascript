var Nombre = 'Sebastian'
var Apellido = 'Gutierrez'
var Edad = 31
var nombreMayuscula = Nombre.toUpperCase()
var apellidoMayuscula = Apellido.toUpperCase()

var letraPrimerPosicion = Nombre.charAt(0)
var cantidadLetras = Apellido.length

var nombreCompleto = `${Nombre} ${Apellido}`
var NombrecompletoMayuscula = nombreCompleto.toUpperCase()

var nom = Nombre.substr(0, 2)
var ape = Apellido.substr(0, 3)

var alias = `${nom}${ape}`

var last = Apellido.charAt(cantidadLetras - 1)