const SEBAS = {
    nombre: 'Sebastian',
    apellido: 'Gutierrez',
    edad: 31
}

// const CUMPLE = persona => persona.edad++

const CUMPLEINMUTABLE = persona => ({
    ...persona,
    edad: persona.edad + 1
})