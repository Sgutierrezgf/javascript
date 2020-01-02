function Persona(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

var sebas = new Persona('sebastian', 'gutierrez')
var lau = new Persona('laura', 'cuervo')
var caro = new Persona('carolina', 'hortua')
sebas.saludar()
lau.saludar()
caro.saludar()