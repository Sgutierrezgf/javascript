class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar(fn) {
        var { nombre, apellido } = this
        console.log(`Hola, me llamo ${nombre} ${apellido}`)
        if (fn) {
            fn(nombre, apellido, true)
        }

    }
    soyAlto() {
        return this.altura > 1.80
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }
    saludar(fn) {
        var { nombre, apellido } = this
        console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador`)
        if (fn) {
            fn(nombre, apellido, true)
        }
    }

}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen dia ${nombre} ${apellido}`)
    if (esDev) {
        console.log(`Ah mira, no sabia que eras desarrollador`)
    }
}

var sebas = new Persona('sebastian', 'gutierrez', 1.85)
var caro = new Persona('carolina', 'hortua', 1.70)
var lau = new Desarrollador('laura', 'cuervo', 1.65)

sebas.saludar()
caro.saludar(responderSaludo)
lau.saludar(responderSaludo)