var sebas = {
    nombre: 'sebastian',
    apellido: 'gutierrez',
    altura: 1.85,
    edad: 31
}
var andres = {
    nombre: 'andres',
    apellido: 'gutierrez',
    altura: 1.80,
    edad: 60
}
var juli = {
    nombre: 'julian',
    apellido: 'gutierrez',
    altura: 1.80,
    edad: 27
}
var mila = {
    nombre: 'mila',
    apellido: 'guisao',
    altura: 1.60,
    edad: 51
}
var lau = {
    nombre: 'laura',
    apellido: 'cuervo',
    altura: 1.60,
    edad: 28
}
var xime = {
    nombre: 'ximena',
    apellido: 'soto',
    altura: 1.65,
    edad: 26
}

const esAlta = persona => persona.altura > 1.70
var personas = [sebas, andres, juli, mila, lau, xime]
var personasAltas = personas.filter(esAlta)
for (var i = 0; i < personas.length; i++) {
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura} y tiene ${persona.edad} años`)
}

const pasarAlturaCms = persona =>
    ({
        ...persona,
        altura: persona.altura * 100
    })

{

    return {
        ...persona,
        altura: persona.altura * 100
    }
}

var personasCms = personas.map(pasarAlturaCms)

console.log(personasCms)



const reducer = (acum, personas) => {
    return acum + persona.totalEdad
}
var totalEdad = personas.reduce(reducer, 0)

console.log(`En total la edad es ${persona.edad}`)