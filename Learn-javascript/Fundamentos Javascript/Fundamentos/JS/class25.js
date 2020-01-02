class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    }
    soyAlto() {
        return this.altura > 1.80
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}y soy desarrollador`)
    }
}
// function Persona(nombre, apellido, altura) {
//     this.nombre = nombre
//     this.apellido = apellido
//     this.altura = altura
// }

// Persona.prototype.saludar = function() {
//     console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
// }

// Persona.prototype.soyAlto = function() {
//     return this.altura > 1.80
// }

// function Desarrollador(nombre, apellido) {
//     this.nombre = nombre
//     this.apellido = apellido
// }

// Desarrollador.prototype.saludar = function() {
//     console.log(`Hola, me llamo ${this.nombre} ${this.apellido}y soy desarrollador`)
// }

// var sebas = new Persona('sebastian', 'gutierrez', 1.72)
// var lau = new Persona('laura', 'cuervo', 1.65)
// var caro = new Persona('carolina', 'hortua', 1.89)