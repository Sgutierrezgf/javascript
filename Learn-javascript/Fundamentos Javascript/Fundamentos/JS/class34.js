const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const OPTS = { crossDomain: true }

function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $.get(URL, OPTS, function(data) {
                resolve(data)
            })
            .fail(() => reject(id))
    })
}


function onError(id) {
    console.log(`Sucedio un error al obtener el personaje ${id}`)
}

var ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    // var promesas = ids.map(function(id) {
    //     return obtenerPersonaje(id)
    // })

var promesas = ids.map(id => obtenerPersonaje(id))
Promise
    .all(promesas)
    .then(character => console.log(character))
    .catch(onError)


// obtenerPersonaje(1)
//     .then(character => {
//         console.log(`El personaje 1 es ${character.name}`)
//         return obtenerPersonaje(2)
//     })
//     .then(character => {
//         console.log(`El personaje 2 es ${character.name}`)
//         return obtenerPersonaje(3)
//     })
//     .then(character => {
//         console.log(`El personaje 3 es ${character.name}`)
//         return obtenerPersonaje(4)
//     })
//     .then(character => {
//         console.log(`El personaje 4 es ${character.name}`)
//         return obtenerPersonaje(5)
//     })
//     .then(character => {
//         console.log(`El personaje 5 es ${character.name}`)
//         return obtenerPersonaje(6)
//     })
//     .catch(onError)