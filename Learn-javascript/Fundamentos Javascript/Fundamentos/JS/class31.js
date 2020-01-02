const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const OPTS = { crossDomain: true }

function obtenerPersonaje(id, callback) {
    const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

    $
        .get(URL, OPTS, callback)
        .fail(function() {
            console.log('Sucedio un error. No se pudo obtener un ID')
        })
}

obtenerPersonaje(1, function(characters) {
    console.log(`Hola, yo soy ${characters.name}`)
    obtenerPersonaje(2, function(characters) {
        console.log(`Hola, yo soy ${characters.name}`)
        obtenerPersonaje(3, function(characters) {
            console.log(`Hola, yo soy ${characters.name}`)
            obtenerPersonaje(4, function(characters) {
                console.log(`Hola, yo soy ${characters.name}`)
                obtenerPersonaje(5, function(characters) {
                    console.log(`Hola, yo soy ${characters.name}`)
                    obtenerPersonaje(6)
                })
            })
        })
    })
})