function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function() {
    return this.altura > 1.80
}

var sebas = new Persona('sebastian', 'gutierrez', 1.72)
var lau = new Persona('laura', 'cuervo', 1.65)
var caro = new Persona('carolina', 'hortua', 1.89)